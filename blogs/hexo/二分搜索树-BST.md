---
title: 二分搜索树-BST
date: 2019-01-08 12:46:18
tags:
 - 二叉树
 - 二分搜索树
 - BST
categories:
 - 算法
---
> 学习一下二分搜索树-BST，用js来来实现BST的创建，查找，遍历，删除等操作

<!--more-->

# 二叉树

## 二分查找法

> 前提条件: 有序    （排序的作用）

递归和非递归两种实现，原理都相同

```js
// 非递归
function binarySearch1(arr,target) {
  let l = 0, r = arr.length - 1
  while(l<=r) {
    // let mid = Math.floor((l + r) / 2)
    let mid = l + Math.floor((r-l)/2)
    if(target === arr[mid])
      return mid
    if(target < arr[mid])
      r = mid -1
    if(target > arr[mid])
      l = mid + 1
  }
  return -1
}

// 递归
function binarySearch2(arr,target,l,r) {
  if (l>r){
    return -1
  }
  let mid = l + Math.floor((r - l) / 2)
  if (target === arr[mid]) {
    return mid
  }
  if (target < arr[mid])
    return binarySearch2(arr,target,l,mid - 1)
  if (target > arr[mid])
    return binarySearch2(arr, target, mid+1, r)
}



let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch1(arr,3));
console.log(binarySearch2(arr, 3,0,arr.length-1));
```

## 二分搜索树-BST

> 通常用来用于查找表的实现 - 字典数据结构

查找，插入，删除都是O(logn)级别，高效！   动态维护数据

### 定义

- 二分搜索树首先是一颗二叉树
- 每个节点的键值大于左孩子
- 每个节点的键值小于右孩子
- 左子树和右子树也是一颗二分搜索树
- 不支持重复元素

> 不一定是完全二叉树(可以是不平衡的，左右孩子可有可无)，用数组表示不方便

```js
function BST() {
  this.root = null
  this.count = 0
}
BST.prototype.size = function () {
  return this.count
}
BST.prototype.isEmpty = function () {
return this.count === 0
}

function Node(key,left,right) {
  this.key = key
  this.left = left
  this.right = right
}
// 返回节点的键值
Node.prototype.show = function() {
  return this.key
}
```

我们接下来完善我们的BST

### 插入-insert

```js
/* 
    插入：先跟根节点的键值做比较
         特殊情况：键值相同则替代
 */
BST.prototype.insert = function(key) {
  var newNode = new Node(key) // 创建一个空节点
  if (!this.root) { // 空树
    this.root = newNode
    this.count++
    return
  }
  let current = this.root
  while (true) {
    if (key < current.key) {
      if(!current.left) {
        current.left = newNode
        this.count++
        break
      } else {
        current = current.left
      }
    } else if (key > current.key) {
      if (!current.right) {
        current.right = newNode
        this.count++
        break
      } else {
        current = current.right
      }
    }
  }
}
```

### 查找-contain&search

```js
/* 
查找：contain和search同质
 */
BST.prototype.contain = function(key) {
  var current = this.root
  while (true) {
    if (key < current.key) {
      if (!current.left) {
        break
      } else {
        current = current.left
      }
    } else if (key > current.key) {
      if (!current.right) {
        break
      } else {
        current = current.right
      }
    } else {
      return true
    }
  }
  return false
}

BST.prototype.search = function (key) {
  var current = this.root
  while (true) {
    if (key < current.key) {
      if (!current.left) {
        break
      } else {
        current = current.left
      }
    } else if (key > current.key) {
      if (!current.right) {
        break
      } else {
        current = current.right
      }
    } else {
      return current
    }
  }
  return null
}
```

### 遍历-Order(深度优先)

- 前序遍历：先访问当前节点--->再依次递归访问左右子树
  - 一般遍历使用前序遍历
- 中序遍历：先递归访问左子树-->再访问自身节点 ---> 右子树
  - 中序遍历访问二分搜索树，可实现从小到大排序
- 后序遍历：先递归访问左右子树--> 再访问自身节点
  - 释放二叉树 -- 先释放左右子树，再释放本身

> 不难发现，前，中，后就是根据当前节点的访问顺序来定的

  ```js
/* 
遍历
 - 前序遍历
 - 中序遍历
 - 后续遍历
 */
// 前序遍历
BST.prototype.preOrder = function() {
  (function(node){
    if(node){
      console.log(node.show())
      arguments.callee(node.left)
      arguments.callee(node.right)
    }
  })(this.root)
}
// 中序遍历
BST.prototype.inOrder = function () {
  (function (node) {
    if (node) {
      arguments.callee(node.left)
      console.log(node.show())
      arguments.callee(node.right)
    }
  })(this.root)
}
// 后续遍历
BST.prototype.postOrder = function () {
  (function (node) {
    if (node) {
      arguments.callee(node.left)
      arguments.callee(node.right)
      console.log(node.show())
    }
  })(this.root)
}
  ```

前中后序遍历都是属于深度优先遍历，我们下面来介绍一种广度优先遍历（层序）

### 层序遍历(广度优先)

将每一层的所有节点优先遍历完毕

```js
/* 
层序遍历
 */
BST.prototype.levelOrder = function() {
  var q = []
  q.push(this.root)
  while(q.length!==0) {
    var res = q.shift()
    console.log(res.show())
    if (res.left !== null) {
      q.push(res.left)
    }
    if (res.right !== null) {
      q.push(res.right)
    }
  }
}
```

### 删除最小值/最大值

**找到它**

二分搜索树找到最小值最大值很简单，根据二分搜索数的特性，从根节点一直找左孩子，知道没有左孩子的那个节点，就是最小值，删除即可，最大值相同

```js
/* 
查找最小值和最大值
 */
BST.prototype.getMin = function () {
  if(this.root) {
    var current = this.root
    while(current.left) {
      current = current.left
    }
    return current.key
  } else {
    return null
  }
}
BST.prototype.getMax = function () {
  if (this.root) {
    var current = this.root
    while (current.right) {
      current = current.right
    }
    return current.key
  } else {
    return null
  }
}
```

最小值所在的节点只会可能有右孩子

最大值所在的节点只会可能有左孩子

### 删除一个节点

```js
/* 
删除节点
 */
BST.prototype.remove = function(key) {
  this.root = this.removeNode(this.root,key)
}
BST.prototype.removeNode = function(node,key) {
  if(node === null)
    return null
  if(key < node.key) {
    node.left = this.removeNode(node.left,key)
    return node
  }
  else if (key > node.key) {
    node.right = this.removeNode(node.right, key)
    return node
  }
  else { // 找到要删除的节点
    // 没有左右子节点
    if(!node.left&&!node.right) {
      this.count--
      return null
    }
    // 没有左子节点
    if(!node.left) {
      this.count--
      return node.right
    }
    // 没有右子节点
    if (!node.right) {
      this.count--
      return node.left
    }

    // 左右子节点都有
    // 1.找到待删除的节点的右子节点的较小的节点
    // 2.赋值给待删除节点
    // 3.再删除最小节点
    var minNode = this.__getSmallest(node.right)
    node.key = minNode.key
    node.right = this.removeNode(node.right,minNode.key)
    return node
  }
}
//查找以node为根节点的二叉树的最小值
BST.prototype.__getSmallest = function (node) {
  var current = node
  while (current.left) {
    current = currnet.left
  }
  return current
}
```

## 局限性

 同样的数据，可以对应不同的二分搜索树

二分搜索树可能退化为链表

改进措施：平衡二叉树

> 无法退化成链表，它有左右两个子树，并且左右子树的高度不会超过1

平衡二叉树有诸多的实现，其中最为著名的实现叫红黑树。其他实现，2-3tree,AVL tree,Splay tree(伸展树)

红黑树：将结点分为红色结点和黑色结点