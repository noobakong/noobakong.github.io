---
title: hexo同步，npm源的修改
date: 2018-09-07 00:12:17
tags:
 - git
 - hexo
 - npm
categories:
 - 工具相关
---
> 在同步hexo的时候遇到的一些小问题，以及解决办法.

<!--more-->

## hexo 同步

> hexo next 搭建了一个个人博客，考虑到多电脑操作，通过使用git来同步配置文件和代码，实现hexo的同步

1. 在已建成的hexo目录下执行命令

   `git init`

   `git add .`

   `git commit -m "message"`

   `git push`

   > hexo中自带gitignore文件，避免了无用文件的上传

2. 在另一台电脑上

   安装node

   `npm i hexo --g`

   新建博客根目录文件夹 如 `hexo`

   在hexo根目录下 `git init`

   `git pull xxxxx 远程仓库的地址`

   `npm i`



## git clone 和 git pull 的区别

> 两者都是从仓库拉取到本地，但是其中有什么区别

git clone 是本地没有仓库的时候，将远程的仓库整个下载下来，是远程操作的第一步。

git pull 是当本地有仓库的时候，将远程仓库里新的 commit 数据 下载下来 并将其 merge  `git pull = git fetch + git merge`



## npm 源 的修改

在上面的hexo init 的过程中，装包的时候多次卡住不动不进展，我们需要修改npm源

> 在国内不翻墙的情况下 官方的npm 有的时候会丢包严重，装包过程中卡主不动，我们可以修改npm 的下载源，将其改为中国的淘宝镜像，这样就可以解决问题了

使用taobao镜像不是必须要安装cnpm，我们可以通过配置对应的registry来达到同样的效果

- 进入 cmd 输入下列命令，配置registry

  `npm config set registry https://registry.npm.taobao.org`

-  配置后可通过下面方式来验证是否成功

  `npm config get registry`

这样就可以快速的装包了