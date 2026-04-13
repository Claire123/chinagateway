# 直接部署到 Vercel（绕过 GitHub）

由于网络问题无法连接 GitHub，可以使用 Vercel CLI 直接部署。

## 方法：Vercel CLI 直接部署

### 步骤 1：安装 Vercel CLI
```bash
npm i -g vercel
```

### 步骤 2：登录 Vercel
```bash
vercel login
# 会打开浏览器让你登录
```

### 步骤 3：直接部署
```bash
cd C:\Users\clair\.openclaw\workspace\chinagateway-web
vercel --prod
```

### 步骤 4：选择项目
- 选择你之前创建的 `chinagateway` 项目
- 或创建新项目

## 替代方案：手动上传

1. 构建项目：
```bash
npm run build
```

2. 在 Vercel Dashboard 中：
   - 进入你的项目
   - 点击 "Deployments"
   - 点击 "Upload Directory"
   - 选择 `.next` 文件夹

## 检查网站状态

部署后检查：
- https://chinagateway.vercel.app

如果还是打不开手机版，可能是：
1. CSS 兼容性问题
2. JavaScript 错误
3. 响应式布局问题

## 调试手机版

1. 电脑 Chrome 按 F12
2. 点击设备切换按钮（手机图标）
3. 选择 iPhone 或 Android 尺寸
4. 查看是否有错误
