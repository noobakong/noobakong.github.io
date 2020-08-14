#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm run build

# 进入生成的构建文件夹
cd ./public

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch gh-pages
# 如果你想要部署到 https://<USERNAME>.github.io
git push -f git@github.com:noobakong/noobakong.github.io.git gh-pages
git push -f git@gitee.com:noobakong/noobakong.git gh-pages
cd ../
git add -A
git commit -m 'up'
git push -f git@github.com:noobakong/noobakong.github.io.git master
git push -f git@gitee.com:noobakong/noobakong.git master
# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -