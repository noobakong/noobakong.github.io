---
title: 如何使用Debug调试代码
date: 2019-01-31 00:20:46
tags:
 - debug
 - 浏览器调试
categories:
 - 工具相关
---
> 只会用console.log来调试自己的代码，太low了，学一学如何使用debug，打断点的方式来调试自己的代码。🚴‍♀️🚴‍♀️🚴‍♂️🚴‍♀️🚴‍♀️🚴‍♂️

<!--more-->

### 如何停止使用`console.log()`转而使用浏览器`debugger`

>**原文地址：[How to stop using console.log() and start using your browser’s debugger](https://medium.com/datadriveninvestor/stopping-using-console-log-and-start-using-your-browsers-debugger-62bc893d93ff)**
>**原文作者：[Parag Zaveri](https://medium.com/@parag.g.zaveri)**
>
>**译者：noobakong**

当我开始成为一名软件开发者的过程中，我确实遇到了很多困难。大多数新开发者面临的最常见的问题就是调试(debugging)。起初，当我意识到我可以打开浏览器的控制台(`console`)然后`console.log()`出来值去寻找bug在哪的时候，我认为我发现了圣杯。事实证明这是非常低效的。

为了幽默起见，举几个我最喜欢的例子：

```js
console.log(‘Total Price:’, total) // 查看值是否已经储存

console.log(‘Here’) // 判断程序是否执行某一个函数
```

我认为大多数开发人员开始意识到这确实并不是实际中调试程序的方法。必须要有一个更好的办法。

庆幸的是还真有，你的浏览器的调试工具。确切的说，我下面会详Chrome开发者工具。

在本文中，在Chrome开发者工具里，我将介绍使用breakpoints（断点），单步执行代码，设置监听表达式，以及专注于定位。

> 为了继续学习本教程，您需要使用我创建的储库代码示例（在线demo），[点击这里](https://chromedevtoolsdemo.herokuapp.com/) (可能需要一点时间加载)

#### 步骤1：重现Bug

我们首先执行一系列的操作使其能一直重现Bug

1. 在我们的例子中，我们将使用一个车载计费器，如果你还没有打开案例，[请点击这里](https://chromedevtoolsdemo.herokuapp.com/)
2. 在`Entree1`处输入`12`
3. 在`Entree2`处输入`8`
4. 在`Entree3`处输入`10`
5. 在`Tax`处输入`10`
6. 在`Tip`处选择`20%`
7. 点击` Calculate Bill`, 共计应该是39.6，然而我们得到的是一个不同的结果，出现了14105.09… ！！！

> 注释：这里不必纠结数字到底是多少的问题，就是和预期的不同就行了。

#### 步骤2：学习使用`Sources`面板

为了在浏览器中调试，你需要习惯使用开发者工具(DevTools)，打开浏览器开发者工具，Mac 按 `Command+Option+I`，Linux 按 `Control+Shift+I`

> 为什么不用F12，啊哈哈。。


![](https://user-gold-cdn.xitu.io/2019/1/27/1688fea27aa555fb?w=800&h=890&f=png&s=317519)


点击面板上面的`sources`面板选项，你应该可以访问三个面板进行调试。分别是`文件导航`，`源代码编辑器`，`调试面板`。在进行步骤3之前，点击熟悉一下，享受一下乐趣。

#### 步骤3：设置你的第一个断点
在演示如何设置你的第一个断点前，让我先演示一下使用`console.log()`的用法。显而易见的，在我们的程序只执行的过程中，部分的计算是有问题的。可以这样做来调试程序：

![](https://user-gold-cdn.xitu.io/2019/1/27/1688fee4a47b73f9?w=664&h=430&f=png&s=82347)

幸运的是，在我们的浏览器开发工具里，这不再是必需的，相反，我们可以简单地设置一个断点并单步执行代码，在查看浏览器的时候找到值。

我们来谈谈如何生设置一个断点。断点是为了让你的浏览器去寻找什么时候暂停你的代码以允许你有调试它的机会的东西。

出于我们的目的，我们将通过设置鼠标事件，以在我们程序执行的第一步设置一个断点。
> 在调试面板中展开`Event Listener Breakpoints`选项的视图。再展开`Mouse`,选择`click`按钮。

![](https://user-gold-cdn.xitu.io/2019/1/28/16890132f699ad52?w=476&h=638&f=png&s=73163)

现在当你点击页面的`Calculate Bill`按钮的时候，调试器将会在第一个`onClick()`方法的第一行暂停执行，如果调试器在其他位置也有，点击播放按钮，调试器就会跳转到它。

#### 步骤4：单步执行你的代码
在所有的调试工具中，代码执行的过程中，导航中都会有两个选项。用户可以选择`step into` 和 `step over` 中的一个去进行操作函数运行的下一步。

`step into` 是规定每个函数内部逐个执行每行代码
![](https://user-gold-cdn.xitu.io/2019/1/28/168901f891e523d4?w=26&h=30&f=png&s=353)

`step over` 是规定跳过正在工作运行的整个函数
![](https://user-gold-cdn.xitu.io/2019/1/28/16890211e89a7673?w=29&h=28&f=png&s=572)

> 注释：这两者的区别就是
> `step into:` 遇到子函数就进入并且继续单步执行
> `step over: `在函数内遇到子函数时不会进入子函数内单步执行，而是将子函数整个执行完在停止，也就是把子函数整个作为一步

下面是一个单步执行我的代码的例子，在`Scope`选项卡下，前三个`entree`的值展现在右边

![](https://user-gold-cdn.xitu.io/2019/1/28/16890260a6d2573f?w=678&h=938&f=png&s=292559)

#### 步骤5：设置第一行代码断点

真的~能够一步一步的执行你的代码是不可思议的，但是有点庞大和累赘的，对吧？通常，我仅仅是只想知道某一区域的值。行代码断点，就是解决这一问题的方案。

代码行断点是我停止使用`console.log()`而选择chrome开发工具的原因。简单的点击你想要看到更多信息的代码的行数，就可以为其设置行代码断点。像往常一样运行代码，程序就会在你设置行代码断点的位置停止而不是去单步执行每个函数的每一行。

> 如果你遇到问题，请确保你已取消选中`Mouse`下的`click`选项

![](https://user-gold-cdn.xitu.io/2019/1/28/1689033491039c78?w=800&h=680&f=png&s=312086)

正如你看到的，我的`subtotal`值按照我的要求显示为`10812`，我的几个entree值也在`Scope`面板和代码自身上的悬浮块上展示了出来。

嗯emm。。 我想我也许找出来这个bug原因了，字符串拼接相关？？

让我们设置一些监听表达式来确认它。

#### 步骤6：创建监听表达式

现在我们知道我们的entree值没有正确的想加，让我们为每一个值设置一个监听表达式。一个监听表达式能够让我们从代码的任何表达式或者变量中获取更多信息。

> 要确定监听的值，请单击右边面板的最上面的`watch`窗口，并且点击`+`按钮就可以输入变量名或者其他表达式。

对于这个例子，我将会给我第一个`entree`和它的类型值设置`watch`

![](https://user-gold-cdn.xitu.io/2019/1/28/16894c5ca767b11c?w=836&h=912&f=png&s=282984)

呜呼，我想我找到问题所在了，看来我的第一个`entree`值是一个字符串形式存储的。可能是我获取它的时候有问题。也许，`querySelector()`是罪魁祸首。其他的几个值也可能受到影响，让我们在开发者工具中进一步调试我们的代码。

#### 步骤7：修复代码

从下面展示来看，`querySelector()`一定是罪魁祸首！


![](https://user-gold-cdn.xitu.io/2019/1/28/16894cc7364fec4f?w=843&h=878&f=png&s=283907)

那我们怎么来修复它呢？ 我们可以简单使用`Number(getEntree1())`将字符串强制转换成数字，如第74行所示。

为了实际编写代码，你需要到转到`sources`面板左边的`elements`面板。如果你看不见JavaScript代码，请展开Script标签，在那里，右键点击并选择`edit as HTML`

![](https://user-gold-cdn.xitu.io/2019/1/28/16894d57f94baa03?w=1057&h=508&f=png&s=112947)

> 如果你在工作环境下，那么保存代码非常容易。如果你不是的，需要用`Command+S`或者`control+S`来保存网页的本地副本，你可以打开它查看编辑更改。


![](https://user-gold-cdn.xitu.io/2019/1/28/16894d7e33c24060?w=1170&h=1244&f=png&s=86734)

好喽~

Demo Code: https://github.com/paragzaveri/chromeDevTools

> 其实作为一个前端开发人员，只会用`console.log`来调试代码是非常低级的，虽然我也经常用啊哈哈哈，这里翻译一篇关于`debugger`入门级的文章，浏览器的`debugger`和编辑器(VSCODE等)的`debugger`完全一样，可以尝试着在开发中打一打断点，体验一下`调试`的乐趣。 附上我的[个人博客](https://noobakong.gitee.io/)和[github](https://github.com/noobakong)，持续输出，共同进步。🚲