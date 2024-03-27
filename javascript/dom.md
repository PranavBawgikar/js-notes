## Document Object Model
DOM is a built-in object in JavaScript.
```js
document.body.innerHTML = 'hello' // This code removes everything on the page and replaces it with the text 'hello'
document.title = 'Demo' // Changes the title of the web page
```
On line 1, we try to change the content on the web page using `innerHTML` property. To understand how that happens we need to know that-
- The  `document` is an object whose property is `body` that we are accessing using the dot notation.
- Now `body` is also an object whose property `innerHTML` is accessed using the dot notation.
- And, finally we use an equal sign to change the value of innerHTML to 'hello'.

This `document` object is always linked to the web page. Hence the name, Document Object Model.
