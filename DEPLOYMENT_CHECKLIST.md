# ChinaGateway 上线部署清单

## ✅ 已完成

### 功能开发
- [x] City Guide 补充成都、桂林、杭州详情
- [x] Trip Planner "Book This Trip" 跳转优化
- [x] Privacy Policy & Terms of Service 页面
- [x] Admin Dashboard 数据导出功能
- [x] 表单错误处理增强
- [x] 邮箱替换为 contactus@chinagateway.it.com

### 安全修复
- [x] Admin 身份验证（登录保护）
- [x] 输入验证（Zod）
- [x] Rate Limiting（防刷）
- [x] Next.js 升级到 14.2.35
- [x] SEO URL 更新

### 基础设施
- [x] 域名购买：chinagateway.it.com
- [x] Cloudflare DNS 配置
- [x] Vercel 域名绑定
- [x] SSL Full (strict)
- [x] Vercel 环境变量配置

## ⏳ 待完成

### 代码推送
- [ ] 执行 `git push` 推送最新代码（网络恢复后）

### Vercel 部署
- [ ] 在 Vercel Dashboard 重新部署（Redeploy）

### 测试验证
- [ ] 访问 https://chinagateway.it.com 确认正常
- [ ] 访问 https://chinagateway.it.com/admin 测试登录
- [ ] 提交测试表单，确认邮件发送

## 🔧 环境变量（已在 Vercel 配置）

```
ADMIN_PASSWORD=你的密码
ADMIN_AUTH_TOKEN=你的Token
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contactus@chinagateway.it.com
SMTP_PASS=你的SMTP密码
```

## 📧 邮箱配置

如需修改邮箱设置，更新以下文件：
- `app/api/contact/route.ts`
- `app/api/healthcare-booking/route.ts`
- `app/api/bookings/route.ts`

## 🗄️ 未来优化（可选）

- [ ] 数据库迁移（SQLite/PostgreSQL）
- [ ] 图片下载到本地（替代 Unsplash）
- [ ] Google Analytics 集成
- [ ] Sitemap.xml 生成
