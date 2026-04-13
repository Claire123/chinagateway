# ChinaGateway 部署指南

## 快速部署（推荐）

### 方式一：GitHub + Vercel 自动部署

#### 步骤 1: 初始化 Git 仓库
```bash
# Windows 用户双击运行 setup-github.bat
# 或手动运行:
git init
git add .
git commit -m "Initial commit"
```

#### 步骤 2: 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名称: `chinagateway`
3. 选择 Public 或 Private
4. 点击 "Create repository"

#### 步骤 3: 推送代码
```bash
git remote add origin https://github.com/YOUR_USERNAME/chinagateway.git
git branch -M main
git push -u origin main
```

#### 步骤 4: Vercel 自动部署
1. 访问 https://vercel.com/new
2. 导入 GitHub 仓库
3. 点击 "Deploy"
4. 完成！网站自动上线

---

## PWA 功能

网站已配置为 PWA（渐进式Web应用），用户可以在手机上：

### iPhone (iOS 16.4+)
1. 用 Safari 打开网站
2. 点击底部 "分享" 按钮
3. 选择 "添加到主屏幕"
4. 像原生 App 一样使用

### Android (Chrome)
1. 用 Chrome 打开网站
2. 点击菜单 → "添加到主屏幕"
3. 或等待自动提示 "安装应用"

### PWA 特性
- ✅ 离线访问（缓存页面）
- ✅ 添加到主屏幕
- ✅ 全屏显示（无浏览器地址栏）
- ✅ 推送通知（可选）
- ✅ 后台同步

---

## 方式二：静态导出（最简单）

```bash
# 构建静态版本
npm run build

# 生成 out 文件夹
# 上传到任何静态托管服务:
# - Netlify (netlify.com)
# - Cloudflare Pages (pages.cloudflare.com)
# - GitHub Pages
# - 阿里云 OSS
# - 腾讯云 COS
```

---

## 方式三：Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

---

## 自定义域名

### Vercel 配置
1. 进入 Vercel Dashboard
2. 选择项目 → Settings → Domains
3. 添加你的域名
4. 按提示配置 DNS

### 推荐域名注册
- Cloudflare Registrar (成本价)
- Namecheap
- GoDaddy

---

## 环境变量配置

在 Vercel Dashboard → Settings → Environment Variables 中添加：

```
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret_key
NEXT_PUBLIC_API_URL=https://your-api.com
```

---

## 自动部署

已配置 GitHub Actions (`.github/workflows/deploy.yml`)

每次推送到 `main` 分支，自动部署到 Vercel。

---

## 需要帮助？

- Vercel 文档: https://vercel.com/docs
- Next.js 部署: https://nextjs.org/docs/deployment
- PWA 配置: https://web.dev/progressive-web-apps/
