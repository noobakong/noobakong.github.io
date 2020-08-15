(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{497:function(s,o,e){"use strict";e.r(o);var v=e(4),_=Object(v.a)({},(function(){var s=this,o=s.$createElement,e=s._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("cookies session sessionStorage和localStorage,这些都是什么东西呢，有什么关系和区别啊~ 来跟着我探讨一下吧哈哈哈")])]),s._v(" "),e("h1",{attrs:{id:"cookies-session-sessionstorage和localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookies-session-sessionstorage和localstorage"}},[s._v("#")]),s._v(" cookies session sessionStorage和localStorage")]),s._v(" "),e("h2",{attrs:{id:"cookies和session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookies和session"}},[s._v("#")]),s._v(" cookies和session")]),s._v(" "),e("blockquote",[e("p",[s._v("在HTML4的时候本地存储一般使用cookie，浏览器的缓存机制提供了可以将用户数据存储在客户端上的方式，可以利用cookie,session等跟服务端进行数据交互。")])]),s._v(" "),e("p",[s._v("cookie和session都是用来跟踪浏览器用户身份的会话方式。")]),s._v(" "),e("p",[s._v("下面介绍下cookie和session的主要区别差异")]),s._v(" "),e("h3",{attrs:{id:"保持状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保持状态"}},[s._v("#")]),s._v(" 保持状态")]),s._v(" "),e("blockquote",[e("p",[s._v("cookie保存在浏览器端")]),s._v(" "),e("p",[s._v("session保存在服务器端")])]),s._v(" "),e("h3",{attrs:{id:"使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),e("p",[e("strong",[s._v("cookie机制：")])]),s._v(" "),e("ul",[e("li",[s._v("如果不在浏览器中设置过期时间，cookie被保存在内存中，生命周期随浏览器的关闭而结束，这种cookie简称会话cookie。如果在浏览器中设置了cookie的过期时间，cookie被保存在硬盘中，关闭浏览器后，cookie数据仍然存在，直到过期时间结束才消失。")]),s._v(" "),e("li",[s._v("Cookie是服务器发给客户端的特殊信息，cookie是以文本的方式保存在客户端，每次请求时都带上它")])]),s._v(" "),e("p",[e("strong",[s._v("session机制：")])]),s._v(" "),e("ul",[e("li",[s._v("当服务器收到请求需要创建session对象时\n首先会检查客户端请求中是否包含sessionid。\n如果有sessionid，服务器将根据该id返回对应session对象。\n如果客户端请求中没有sessionid，服务器会创建新的session对象，并把新的session的sessionid在本次响应中返回给客户端。")]),s._v(" "),e("li",[s._v("通常使用cookie方式存储sessionid到客户端，在交互中浏览器按照规则将sessionid发送给服务器。")]),s._v(" "),e("li",[s._v("如果用户禁用cookie，则要使用URL重写，可以通过response.encodeURL(url) 进行实现；\nAPI对encodeURL的结束为：\n"),e("ul",[e("li",[s._v("当浏览器支持Cookie时，url不做任何处理")]),s._v(" "),e("li",[s._v("当浏览器不支持Cookie的时候，将会重写URL将SessionID拼接到访问地址后。")])])])]),s._v(" "),e("h3",{attrs:{id:"存储内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储内容"}},[s._v("#")]),s._v(" 存储内容")]),s._v(" "),e("ul",[e("li",[s._v("cookie只能保存字符串类型，以文本的方式")]),s._v(" "),e("li",[s._v("session通过类似与Hashtable的数据结构来保存，能支持任何类型的对象(session中可含有多个对象)")])]),s._v(" "),e("h3",{attrs:{id:"存储大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储大小"}},[s._v("#")]),s._v(" 存储大小")]),s._v(" "),e("ul",[e("li",[s._v("cookie：单个cookie保存的数据不能超过4kb")]),s._v(" "),e("li",[s._v("session大小没有限制。")])]),s._v(" "),e("h3",{attrs:{id:"安全性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全性"}},[s._v("#")]),s._v(" 安全性")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("cookie：安全性较弱")]),s._v(" "),e("blockquote",[e("p",[s._v("针对cookie所存在的攻击：Cookie欺骗，Cookie截获；")])])]),s._v(" "),e("li",[e("p",[s._v("session的安全性大于cookie。")]),s._v(" "),e("p",[s._v("原因如下：")]),s._v(" "),e("ul",[e("li",[s._v("sessionID存储在cookie中，若要攻破session首先要攻破cookie；")]),s._v(" "),e("li",[s._v("sessionID是要有人登录，或者启动session_start才会有，所以攻破cookie也不一定能得到sessionID；")]),s._v(" "),e("li",[s._v("第二次启动session_start后，前一次的sessionID就是失效了，session过期后，sessionID也随之失效。")]),s._v(" "),e("li",[s._v("sessionID是加密的")])]),s._v(" "),e("p",[s._v("综上所述，攻击者必须在短时间内攻破加密的sessionID，相比cookies安全太多了")])])]),s._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),e("p",[e("strong",[s._v("cookie：")])]),s._v(" "),e("ul",[e("li",[s._v("判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除cookie，则每次登录必须从新填写登录的相关信息。")]),s._v(" "),e("li",[s._v("保存上次登录的时间等信息。")]),s._v(" "),e("li",[s._v("保存上次查看的页面")]),s._v(" "),e("li",[s._v("浏览计数")])]),s._v(" "),e("p",[e("strong",[s._v("session：")])]),s._v(" "),e("blockquote",[e("p",[s._v("Session用于保存每个用户的专用信息，变量的值保存在服务器端，通过SessionID来区分不同的客户。")])]),s._v(" "),e("ul",[e("li",[s._v("网上商城中的购物车")]),s._v(" "),e("li",[s._v("保存用户登录信息")]),s._v(" "),e("li",[s._v("将某些数据放入session中，供同一用户的不同页面使用")]),s._v(" "),e("li",[s._v("防止用户非法登录")])]),s._v(" "),e("h3",{attrs:{id:"两者缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两者缺点"}},[s._v("#")]),s._v(" 两者缺点")]),s._v(" "),e("p",[e("strong",[s._v("cookie：")])]),s._v(" "),e("ul",[e("li",[s._v("大小受限")]),s._v(" "),e("li",[s._v("用户可以操作（禁用）cookie，使功能受限")]),s._v(" "),e("li",[s._v("安全性较低")]),s._v(" "),e("li",[s._v("有些状态不可能保存在客户端。")]),s._v(" "),e("li",[s._v("每次访问都要传送cookie给服务器，浪费带宽。")]),s._v(" "),e("li",[s._v("cookie数据有路径（path）的概念，可以限制cookie只属于某个路径下。")])]),s._v(" "),e("p",[e("strong",[s._v("session：")])]),s._v(" "),e("ul",[e("li",[s._v("Session保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。")]),s._v(" "),e("li",[s._v("依赖于cookie（sessionID保存在cookie），如果禁用cookie，则要使用URL重写，不安全")]),s._v(" "),e("li",[s._v("创建Session变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用session变量将会导致代码不可读而且不好维护。")])]),s._v(" "),e("h2",{attrs:{id:"html5的本地存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5的本地存储"}},[s._v("#")]),s._v(" HTML5的本地存储")]),s._v(" "),e("p",[s._v("HTML5中与本地存储相关的两个重要内容：Web Storage与本地数据库。")]),s._v(" "),e("p",[s._v("Web Storage存储机制是对HTML4中cookie存储机制的一个改善。")]),s._v(" "),e("p",[s._v("由于cookie存储机制有很多缺点，HTML5不再使用它，转而使用改良后的Web Storage存储机制。")]),s._v(" "),e("p",[s._v("本地数据库是HTML5中新增的一个功能，使用它可以在客户端本地建立一个数据库，原本必须保存在服务器端数据库中的内容现在可以直接保存在客户端本地了，这大大减轻了服务器端的负担，同时也加快了访问数据的速度。")]),s._v(" "),e("p",[e("strong",[s._v("下面主要来讲解Web Storage")])]),s._v(" "),e("blockquote",[e("p",[s._v("Web Storage主要是 sessionStorage和localStorage")])]),s._v(" "),e("p",[s._v("WebStorage的目的是克服由cookie所带来的一些限制，当数据需要被严格控制在客户端时，不需要持续的将数据发回服务器。")]),s._v(" "),e("p",[s._v("传统的html4 cookie 存在着以下明显不足：")]),s._v(" "),e("ul",[e("li",[s._v("大小：cookie的大小被限制在4KB。")]),s._v(" "),e("li",[s._v("带宽：cookie是随HTTP事务一起被发送的，因此会浪费一部分发送cookie时使用的带宽。")]),s._v(" "),e("li",[s._v("复杂性：要正确的操纵cookie是很困难的。")])]),s._v(" "),e("blockquote",[e("p",[s._v("安全性的问题和cookie一样 都不安全，不要在其存放敏感信息")])]),s._v(" "),e("p",[s._v("针对这些问题，在HTML5中，重新提供了一种在客户端本地保存数据的功能，它就是Web Storage。")]),s._v(" "),e("p",[s._v("具体来说，Web Storage又分为两种：")]),s._v(" "),e("h3",{attrs:{id:"sessionstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[s._v("#")]),s._v(" sessionStorage")]),s._v(" "),e("p",[s._v("将数据保存在session对象中。所谓session，是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。session对象可以用来保存在这段时间内所要求保存的任何数据。")]),s._v(" "),e("h3",{attrs:{id:"localstorage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[s._v("#")]),s._v(" localStorage")]),s._v(" "),e("p",[s._v("将数据保存在客户端本地的硬件设备(通常指硬盘，也可以是其他硬件设备)中，即使浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时仍然可以继续使用。")]),s._v(" "),e("h3",{attrs:{id:"两者区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两者区别"}},[s._v("#")]),s._v(" 两者区别")]),s._v(" "),e("p",[s._v("这两者的区别在于：")]),s._v(" "),e("ul",[e("li",[s._v("sessionStorage为临时保存")]),s._v(" "),e("li",[s._v("localStorage为永久保存（可删除）")])]),s._v(" "),e("blockquote",[e("p",[s._v("到目前为止，Firefox3.6以上、Chrome6以上、Safari 5以上、Pera10.50以上、IE8以上版本的浏览器支持sessionStorage与localStorage的使用。")])]),s._v(" "),e("h3",{attrs:{id:"使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),e("p",[s._v("WebStorage两个主要目标：")]),s._v(" "),e("ol",[e("li",[s._v("提供一种在cookie之外存储会话数据的路径。")]),s._v(" "),e("li",[s._v("提供一种存储大量可以跨会话存在的数据的机制。")])]),s._v(" "),e("h3",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[s._v("#")]),s._v(" 生命周期")]),s._v(" "),e("p",[e("strong",[s._v("localStorage")])]),s._v(" "),e("p",[s._v("localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。localStorage除非主动删除数据，否则数据永远不会消失。")]),s._v(" "),e("p",[e("strong",[s._v("sessionStorage")])]),s._v(" "),e("p",[s._v("sessionStorage的生命周期是在仅在当前会话下有效。")]),s._v(" "),e("p",[s._v("sessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。")]),s._v(" "),e("p",[s._v("只要这个浏览器窗口没有关闭，就算刷新页面或者进入同源另一个页面，数据依然存在。")]),s._v(" "),e("p",[s._v("但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。一个浏览器窗口对应着一个session对象。")]),s._v(" "),e("h3",{attrs:{id:"存储相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储相关"}},[s._v("#")]),s._v(" 存储相关")]),s._v(" "),e("p",[e("strong",[s._v("存储大小")])]),s._v(" "),e("p",[s._v("localStorage和sessionStorage的存储数据大小一般都是：5MB")]),s._v(" "),e("p",[e("strong",[s._v("存储位置")])]),s._v(" "),e("p",[s._v("localStorage和sessionStorage都保存在客户端，不与服务器进行交互通信。")]),s._v(" "),e("p",[e("strong",[s._v("存储内容类型")])]),s._v(" "),e("p",[s._v("localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理")]),s._v(" "),e("p",[e("strong",[s._v("获取方式")])]),s._v(" "),e("ul",[e("li",[s._v("localStorage：window.localStorage;")]),s._v(" "),e("li",[s._v("sessionStorage：window.sessionStorage;")])]),s._v(" "),e("h3",{attrs:{id:"webstorage的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webstorage的优点"}},[s._v("#")]),s._v(" WebStorage的优点")]),s._v(" "),e("p",[s._v("（1）存储空间更大：cookie为4KB，而WebStorage是5MB；")]),s._v(" "),e("p",[s._v("（2）节省网络流量：WebStorage不会传送到服务器，存储在本地的数据可以直接获取，也不会像cookie一样美词请求都会传送到服务器，所以减少了客户端和服务器端的交互，节省了网络流量；")]),s._v(" "),e("p",[s._v("（3）对于那种只需要在用户浏览一组页面期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage会非常方便；")]),s._v(" "),e("p",[s._v("（4）快速显示：有的数据存储在WebStorage上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快；")]),s._v(" "),e("p",[s._v("（5）安全性：WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题；")]),s._v(" "),e("h3",{attrs:{id:"内置方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置方法"}},[s._v("#")]),s._v(" 内置方法")]),s._v(" "),e("p",[s._v("WebStorage提供了一些方法，数据操作比cookie方便；")]),s._v(" "),e("ul",[e("li",[s._v("setItem (key, value) ——  保存数据，以键值对的方式储存信息。")]),s._v(" "),e("li",[s._v("getItem (key) ——  获取数据，将键值传入，即可获取到对应的value值。")]),s._v(" "),e("li",[s._v("removeItem (key) ——  删除单个数据，根据键值移除对应的信息。")]),s._v(" "),e("li",[s._v("clear () ——  删除所有的数据")]),s._v(" "),e("li",[s._v("key (index) —— 获取某个索引的key")])]),s._v(" "),e("blockquote",[e("p",[s._v("window.localStorage和window.sessionStorage都可以调用上述方法")])])])}),[],!1,null,null,null);o.default=_.exports}}]);