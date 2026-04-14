import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get('code')
  const state = searchParams.get('state') || '/'

  if (!code) {
    return NextResponse.redirect(new URL('/register?error=wechat_auth_failed', request.url))
  }

  try {
    // Exchange code for access token
    const appId = process.env.WECHAT_APP_ID
    const appSecret = process.env.WECHAT_APP_SECRET
    
    if (!appId || !appSecret) {
      console.error('WeChat credentials not configured')
      return NextResponse.redirect(new URL('/register?error=wechat_not_configured', request.url))
    }

    // Get access token
    const tokenRes = await fetch(
      `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${code}&grant_type=authorization_code`
    )
    const tokenData = await tokenRes.json()

    if (tokenData.errcode) {
      console.error('WeChat token error:', tokenData)
      return NextResponse.redirect(new URL('/register?error=wechat_token_failed', request.url))
    }

    // Get user info
    const userRes = await fetch(
      `https://api.weixin.qq.com/sns/userinfo?access_token=${tokenData.access_token}&openid=${tokenData.openid}`
    )
    const userData = await userRes.json()

    if (userData.errcode) {
      console.error('WeChat user info error:', userData)
      return NextResponse.redirect(new URL('/register?error=wechat_user_failed', request.url))
    }

    // Store user in database
    const user = {
      name: userData.nickname,
      email: `wechat_${userData.openid}@placeholder.com`, // WeChat doesn't provide email
      provider: 'wechat',
      providerAccountId: userData.openid,
      avatar: userData.headimgurl,
    }

    // Save to database via API
    await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })

    // Redirect to success page or home
    return NextResponse.redirect(new URL(state, request.url))
  } catch (error) {
    console.error('WeChat OAuth error:', error)
    return NextResponse.redirect(new URL('/register?error=wechat_unknown', request.url))
  }
}
