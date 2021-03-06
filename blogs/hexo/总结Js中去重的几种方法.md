---
title: 总结Js中去重的几种方法
date: 2018-09-24 21:14:00
tags: 数组去重
categories:
 - 算法
---
> 数组去重，中秋快乐。

<!--more-->

##　总结一下Js数组去重的几个方法

### 1. 双重for嵌套法

```javascript
var removeDuplicates = function (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;

      }
    }
  }
  return arr;
}
```

> 从第一项开始，把第一次循环的每个数都和后面的数进行比较，如果相等，就删掉后面的，这样一重循环下来，就能达到去重的效果。

### 2. indexOf方法去重

> indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
>
> 重要的是，这个方法，数组也有！

`indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```javascript
var removeDuplicates = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr;
}
```

### 3.  利用对象属性来去重

先上代码：

```javascript
var removeDuplicates = function (arr) {
  var res = [];
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      res.push(arr[i]);
    }
  }
  return res;
};
```

**利用对象的属性在对象中只能存在一个**的特征，我们可以新建一个对象，一个数组，循环遍历目标数组的每一项，检测到对象中没有当前循环数组的这一个属性时，我们就创建并随意赋予一个值（任意值都可以，因为我们关心的是属性名），将其属性名，也就是我们的数组项push到新数组中，最后返回新数组。

这样我们就能得到去重的新数组了！

> 其中用到了对象的方括号表达式，这里就不在多说

### 4. ES6的set来实现

> 基本思路：ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。

```javascript
var removeDuplicates = function (arr) {
  var x = new Set(arr)
  return [...x]
}
```

短短两行代码，搞定，es6牛逼。
