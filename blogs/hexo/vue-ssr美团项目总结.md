---
title: vue-ssr美团项目总结
date: 2018-12-21 14:07:29
tags:
 - vue
 - project
categories:
 - Vue
 - Project
---
> 使用nuxt开发的vue ssr项目 后端框架使用的koa，记录一下本次项目开发的收获。
> 项目源码及开发简记已上传github：[nuxt-meituan](https://github.com/noobakong/koa-nuxt-meituan)

<!--more-->


# nuxt-metiuan

项目源码及开发简记已上传github：[nuxt-meituan](https://github.com/noobakong/koa-nuxt-meituan)

## 项目收获

- 完整的前后台打通，深刻了对前后台开发结合及分离的认识。对后台(Koa)以及前台(Vue)的理解又更进一步，对ssr后端渲染(nuxt)有了全新的认识。

- 在遇到复杂业务的时候，认真分析页面和数据的关系，善于利用最优的dom结构来布局，合理的利用html标签来使结构更清晰和简单，如此程序多处使用dl>dt+dd的dom布局等
- 认真思考交互，将看似复杂都东西简单化实现，如菜单的划入和画出的实现。
- 关于前端组件，做一块版面前，分析清楚其中的耦合关系。要懂得哪些需要抽离组件复用，哪些不需要复用。善于利用好组件化思维，但不是一味的追求组件化。
- 开发过程中，后端数据往往和前台页面展示的数据有出入，我们前端开发者，要学会将后端拿来的数据进行自己的封装和筛选，因为数据json的映射关系的更改比页面dom更改简单许多。前后端开发的时候，可以不必相互太过依赖中间进行一层数据操作转化即可。
- 数据结构的处理非常重要，一个好的数据结构能够使我们的开发效率大大增加。



## 项目实现

- 登录，邮箱验证注册
- 主页展示
- 切换城市 *联动选择 字母选择*
- geo获取定位
- 实时搜索
- 产品页 *高德地图位置显示* ， 产品详情页
- 购物车及订单页
- 。。。

## 项目展示图

![动图展示](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/GIF.gif)

### 主页

![2主页2](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/1%E4%B8%BB%E9%A1%B5.png)



![1主页](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/2%E4%B8%BB%E9%A1%B52.png)



### 登录注册页

![3登录](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/3%E7%99%BB%E5%BD%95.png)

![4注册](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/4%E6%B3%A8%E5%86%8C.png)

### 实时搜索



![5实时搜索](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/5%E5%AE%9E%E6%97%B6%E6%90%9C%E7%B4%A2.png)



### 菜单面板

![6菜单面板](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/6%E8%8F%9C%E5%8D%95%E9%9D%A2%E6%9D%BF.png)



### 切换城市页

![7切换城市](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/7%E5%88%87%E6%8D%A2%E5%9F%8E%E5%B8%82.png)



### 产品页

![8产品页](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/8%E4%BA%A7%E5%93%81%E9%A1%B5.png)



### 详情页-未登录

![9详情-未登录](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/9%E8%AF%A6%E6%83%85-%E6%9C%AA%E7%99%BB%E5%BD%95.png)



### 详情页- 已登录

![10详情-登录](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/10%E8%AF%A6%E6%83%85-%E7%99%BB%E5%BD%95.png)



### 购物车

![11购物车页面](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/11%E8%B4%AD%E7%89%A9%E8%BD%A6%E9%A1%B5%E9%9D%A2.png)



### 提交订单

![12提交订单](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/12%E6%8F%90%E4%BA%A4%E8%AE%A2%E5%8D%95.png)





### 订单详情页

![13订单页](https://blog-1257919906.cos.ap-guangzhou.myqcloud.com/project-show/meituan/13%E8%AE%A2%E5%8D%95%E9%A1%B5.png)