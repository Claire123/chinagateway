# Vercel Environment Variables Setup

## 问题诊断

### 微信登录错误: "AppID 参数错误"
**原因**: `NEXT_PUBLIC_WECHAT_APP_ID` 环境变量未设置

### Google登录错误: "Server error"
**原因**: `GOOGLE_CLIENT_ID` 和 `GOOGLE_CLIENT_SECRET` 环境变量未设置

---

## 解决步骤

### Step 1: 登录 Vercel Dashboard
1. 访问 https://vercel.com/dashboard
2. 进入 chinagateway 项目
3. 点击 "Settings" → "Environment Variables"

### Step 2: 添加环境变量

添加以下变量：

```
NEXTAUTH_URL=https://chinagateway.vercel.app
NEXTAUTH_SECRET=your-random-secret-key-min-32-chars
```

**生成 NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

---

## Google OAuth 配置

### 1. 创建 Google OAuth 凭证
1. 访问 https://console.cloud.google.com/
2. 创建新项目或选择现有项目
3. 启用 "Google+ API" 或 "People API"
4. 进入 "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. 配置 OAuth consent screen:
   - App name: ChinaGateway
   - User support email: your-email@gmail.com
   - Developer contact: your-email@gmail.com
6. 添加 Authorized redirect URIs:
   ```
   https://chinagateway.vercel.app/api/auth/callback/google
   ```
7. 复制 Client ID 和 Client Secret

### 2. 添加到 Vercel
```
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
```

---

## WeChat OAuth 配置 (可选)

WeChat OAuth 需要中国企业资质，如果暂时无法配置，建议：

**选项 A: 隐藏微信登录按钮**
- 暂时移除微信登录选项
- 只保留 Google 登录

**选项 B: 使用替代方案**
- 手机号 + 验证码登录
- 邮箱注册登录

---

## 临时解决方案

如果暂时无法配置 OAuth，可以修改代码禁用社交登录：

```typescript
// 在 register/page.tsx 中注释掉社交登录按钮
```

---

## 验证配置

配置完成后：
1. 在 Vercel Dashboard 点击 "Redeploy"
2. 等待部署完成
3. 测试登录功能

---

## 当前状态

| 功能 | 状态 | 需要配置 |
|------|------|---------|
| 邮箱注册 | ✅ 正常 | 无需配置 |
| Google登录 | ❌ 错误 | GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET |
| 微信登录 | ❌ 错误 | WECHAT_APP_ID, WECHAT_APP_SECRET |
| Healthcare预约 | ✅ 正常 | 无需配置 |
| Contact表单 | ✅ 正常 | 已配置 |
