#!/bin/bash
# 网络恢复后自动推送并部署

echo "Checking network..."

# 测试 GitHub 连接
if curl -s --head https://github.com | head -n 1 | grep "200\|301\|302" > /dev/null; then
    echo "Network OK, pushing to GitHub..."
    git push
    echo "Push completed!"
else
    echo "Network still down, will retry later"
    exit 1
fi
