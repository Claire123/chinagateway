# Environment Variables Setup Guide

## Required Variables

### SMTP Configuration (Already Configured)
```env
SMTP_HOST=smtp.163.com
SMTP_PORT=465
SMTP_USER=clairezhang2018@163.com
SMTP_PASS=YJU33mwy9Ym5SDHz
```

### NextAuth Configuration
```env
NEXTAUTH_URL=https://chinagateway.vercel.app  # Update for production
NEXTAUTH_SECRET=your-random-secret-key  # Generate with: openssl rand -base64 32
```

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Configure OAuth consent screen
6. Add authorized redirect URIs:
   - `https://chinagateway.vercel.app/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google` (for local dev)
7. Copy Client ID and Client Secret

```env
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### WeChat OAuth Setup (More Complex)

WeChat OAuth requires a Chinese business entity. For international users, alternatives:

**Option 1: WeChat Open Platform (微信开放平台)**
1. Register at [WeChat Open Platform](https://open.weixin.qq.com/)
2. Create a website application
3. Get App ID and App Secret
4. Configure callback domain

**Option 2: Use WeChat Work (企业微信)**
- Easier for business use
- Better API support

**Option 3: Skip WeChat for now**
- Use Google OAuth only
- Add email/password registration

```env
WECHAT_APP_ID=your-wechat-app-id
WECHAT_APP_SECRET=your-wechat-app-secret
NEXT_PUBLIC_WECHAT_APP_ID=your-wechat-app-id
```

## Vercel Deployment

Add these environment variables in Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add each variable
3. Redeploy

## Local Development

Copy `.env.local` to `.env.local` (already done) and fill in your values.

## Testing OAuth

### Google Login Test
1. Start dev server: `npm run dev`
2. Go to http://localhost:3000/register
3. Click "Continue with Google"
4. Should redirect to Google consent screen
5. After approval, redirects back to app

### WeChat Login Test
1. Requires WeChat app configured
2. Click "Continue with WeChat"
3. Shows QR code for scanning
4. After scan approval, redirects back

## Troubleshooting

### "redirect_uri_mismatch" error
- Check redirect URI in Google/WeChat console matches exactly
- Include/exclude trailing slash matters

### "invalid_client" error
- Check client ID and secret are correct
- No extra spaces

### WeChat not working
- WeChat OAuth requires HTTPS in production
- Localhost only works with WeChat test mode
- Consider using ngrok for local testing

## Security Notes

- Never commit `.env.local` to git
- Rotate secrets periodically
- Use strong NEXTAUTH_SECRET
- Enable HTTPS in production
