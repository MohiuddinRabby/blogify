---
author: Golam Mohiuddin
title: Why regular DOM is so fast
date: 2021-05-13
description: The most frequently asked question on the internet what is virtual dom or the difference between virtual dom and browser dom. And the common answer is browser dom is slow and inefficient.

tags:
  - tech
---

<!--more-->
<br/>
<img src="/static/img/regualr-dom.jpg" alt="prevent-distractions" raw=true>
<br/><br/>

The most frequently asked question on the internet **What the difference between virtual DOM and regular browser DOM**.

And the common answer is **Browser DOM is slow and inefficient**.

But wait, there is no sufficient evidence or answer on the internet. You can hardly find one or two answers about the actual difference, but common answers are the same.

And the truth is, our **regular browser dom is as fast as virtual dom**.

Adding or removing elements from dom is as simple as setting an object in JavaScript. Not more than that. And browser dom can do it efficiently and fastly.

But here is the thing. When dom updates or changes, the process runs behind the browser, that process is slow because of code efficiency.
Before any example code or let’s see how the browser works.

<br/>
<img src="/static/img/regula-dom-2.png" alt="prevent-distractions" raw=true>
<br/><br/>

In the diagram, When a browser receives an **HTML** file, the browser render engine parse it & makes a **DOM tree**. **DOM tree** converts every **HTML** elements as a **node**.

Also, **CSS** styles come along with **HTML** file goes to the **CSS** rendering engine.

Browser parse the **CSS** & makes another model like **DOM** that called **CSSOM (CSS object model)**.

Then browser combines both **CSS** and **HTML** parser and makes a render tree. Render tree goes under a phase called ** Layout**.

**In the Layout phase, every renders tree coordinated gets calculated & attach with elements so that browser can track the changes & can print them**.

Lastly, the Layout sends the result to the **Paint** phase & we see the result in the browser.

So, when we make any change or update in the file, the browser has to go through the render process again.

<br/>
<img src="/static/img/regular-dom-3.png" alt="prevent-distractions" raw=true>
<br/><br/>

The browser has to recalculate every style of information & finally show the result. And this continuous Paint process is slow.

That’s one of most reason developer choose modern frameworks to handle DOM operations easily.
For example, when we use Facebook, if we click any button or post like button so many things update at a time. So, you can imagine how many times the browser has to repaint or recalculate things if we do not maintain our code efficiency.

##### Code example

Now let's see an example, to understand the concept more clearly.

```
<div class="container">

</div>
```

```
let array = [];
let increment = 0;
let container = document.querySelector('.container')

// fast process
while (increment<10000){
  array.push(++increment)
}
container.innerHTML = array.join(' ');

```

In the code above, we run the DOM operation only once after looping 10000 times. So, the browser has to repaint the DOM only once.

```
// slow process
while (increment<10000){
  array.push(++increment)
container.innerHTML = array.join(' ');
}
```

But in this example, the browser DOM have to repaint the DOM 10000 times or even more based on condition.

So, you can imagine how the coding efficiency makes the DOM slower or faster. The DOM performance depends on how less you use the DOM.

Modern frameworks like React handle this DOM operations with diff or reconciliation algorithm. Where these DOM updates happens more smartly.
