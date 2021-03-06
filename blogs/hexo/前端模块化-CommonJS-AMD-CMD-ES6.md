---
title: 前端模块化-CommonJS|AMD|CMD|ES6
date: 2018-12-15 21:34:22
tags: 
 - CommonJS
 - AMD&CMD
 - ES6模块化
categories:
 - JavaScript
---

> 学习总结一下前端模块化的几种规则，包括CommonJS，AMD，CDM以及ES6的模块机制。

<!--more-->
# 前端模块化

将代码模块化，提高复用，方便管理。通常一个文件就是一个模块，每个模块是独立的作用域，暴露指定的变量函数，也就是你能得到的都是我想给你的。

目前流行的Js模块化规范有CommonJS，AMD，CMD，和ES6的模块机制。

## CommonJs

CommonJS API定义很多普通应用程序（主要指非浏览器的应用）使用的API,使得JS走出浏览器，开发者可以使用CommonJS API编写应用程序，然后这些应用可以运行在不同的JavaScript解释器和不同的主机环境中。

Node.js是CommonJS规范的主要实践者，他有四个重要的环境变量为模块化的实现提供支持

- module
- exprot
- require
- global

> 实际使用时，用`module.exports`定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块

```js
// a.js中定义并暴露对象
var name = 'akong'
function Person (name) {
    this.name = name
}
module.exprots = {
    name:name,
    Person:Person
}

// b.js使用require引用
var a_obj = require(./a.js)
```

[更多关于node加载机制的可以看我另一篇博客](https://github.com/noobakong/notes/blob/master/06-Node/01-Module.exports%E5%92%8C%E6%A8%A1%E5%9D%97%E5%8A%A0%E8%BD%BD%E8%B7%AF%E5%BE%84.md)



## AMD和require.js

AMD规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，**都定义在一个回调函数**中，等到加载完成之后，这个回调函数才会运行。

require.js是AMD的产出，这里介绍用require.js实现AMD规范的模块化：用`require.config()`指定引用路径等，用`define()`定义模块，用`require()`加载模块。

```js
// 定义math.js模块
define(function () {
    var basicNum = 0;
    var add = function (x, y) {
        return x + y;
    };
    return {
        add: add,
        basicNum :basicNum
    };
});
// 定义一个依赖underscore.js的模块
define(['underscore'],function(_){
  var classify = function(list){
    _.countBy(list,function(num){
      return num > 30 ? 'old' : 'young';
    })
  };
  return {
    classify :classify
  };
})

// 引用模块，将模块放在[]内
require(['jquery', 'math'],function($, math){
  var sum = math.add(10,20);
  $("#sum").html(sum);
});
```

> AMD使用了回调的思想。



## CMD和sea.js

> 大名远扬的玉伯写了seajs，就是遵循他提出的CMD规范，与AMD蛮相近的

require.js在申明依赖的模块时会在第一之间加载并执行模块内的代码

```js
define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { 
    // 等于在最前面声明并初始化了要用到的所有模块
    if (false) {
      // 即便没用到某个模块 b，但 b 还是提前执行了
      b.foo()
    } 
});
```

AMD是依赖前置，提前执行，而**CMD推崇依赖就近，延迟执行。** sea.js就是CMD的产出。

```js
/** AMD写法 **/
define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { 
     // 等于在最前面声明并初始化了要用到的所有模块
    a.doSomething();
    if (false) {
        // 即便没用到某个模块 b，但 b 还是提前执行了
        b.doSomething()
    } 
});

/** CMD写法 **/
define(function(require, exports, module) {
    var a = require('./a'); //在需要时申明
    a.doSomething();
    if (false) {
        var b = require('./b');
        b.doSomething();
    }
});

/** sea.js **/
// 定义模块 math.js
define(function(require, exports, module) {
    var $ = require('jquery.js');
    var add = function(a,b){
        return a+b;
    }
    exports.add = add;
});
// 加载模块
seajs.use(['math.js'], function(math){
    var sum = math.add(1+2);
});
```

## ES6 Module

ES6中实现了模块功能，非常方便。浏览器和服务器(经Babel转换)都能运行，**export导出，import导入**

```js
/** 定义模块 a.js **/
var name = 'akong';
var add = function (a, b) {
    return a + b;
};
export { name, add };

/** 引用模块 **/
import { name, add } from './math';
console.log(name)
console.log(add(1,2))
```

ES6还提供了`export default`命令，为模块指定默认输出，对应的`import`语句不需要使用大括号。这也更趋近于ADM的引用写法。

```js
/** 定义模块 a.js **/
var name = 'akong';
var add = function (a, b) {
    return a + b;
};
export default{ name, add };

/** 引用模块 **/
import obj from './math';
console.log(obj.name)
console.log(obj.add(1,2))
```

## ES6 模块与 CommonJS 模块的差异

### CommonJS

1. 对于基本数据类型，属于复制。即会被模块缓存。同时，在另一个模块可以对该模块输出的变量重新赋值。
2. 对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。
3. 当使用require命令加载某个模块时，就会运行整个模块的代码。
4. 当使用require命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
5. 循环加载时，属于加载时执行。即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

### ES6模块

1. ES6模块中的值属于【动态只读引用】。
2. 对于只读来说，即不允许修改引入变量的值，import的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到import命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
3. 对于动态来说，原始值发生变化，import加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。
4. 循环加载时，ES6模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。



*资料参考：*

[前端模块化](https://juejin.im/post/5aaa37c8f265da23945f365c)

[commonjs和es6](https://www.cnblogs.com/unclekeith/archive/2017/10/17/7679503.html)