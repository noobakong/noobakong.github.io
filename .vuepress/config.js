module.exports = {
  "title": "noobakong",
  "description": "记录前端点滴",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "阿孔的GitHub",
            "link": "https://github.com/noobakong",
            "icon": "reco-github"
          },
          {
            "text": "阿孔的掘金",
            "link": "https://juejin.im/user/3104676568113975",
            "icon": "reco-juejin"
          },
          {
            "text": "阿孔的语雀",
            "link": "https://www.yuque.com/noobakong",
            "icon": "reco-blog"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "sidebar": 'auto',//在所有页面中启用自动生成侧栏
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    // "logo": "/favicon.ico",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "最后更新于",
    "author": "akong",
    "authorAvatar": "/touxiang.jpg",
    "record": "xxxx",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  }
}