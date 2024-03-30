## Document Object Model
DOM is a built-in object in JavaScript. It combines the JavaScript and HTML together and gives JavaScript control of the webpage. <br />
One thing to remember, when an HTML element is inside JavaScript, the HTML element is converted into JavaScript object.
```html
<html>
  <head>
    <title>DOM</title>
  </head>
  <body>
    <button>Hello</button>
    <script>
      console.log(document.body)
      console.log(typeof document.body) // object
    </script>
  </body>
</html>
```

This `document` object is always linked to the web page. Hence the name, Document Object Model.
### Properties and Methods
1. `document.title`
2.  `document.body`
```js
document.body.innerHTML = 'hello' // This code removes everything on the page and replaces it with the text 'hello'
document.body.innerHTML = '<button>Bye</button>' // We can also replace the body content with new HTML content
document.title = 'Demo' // Changes the title of the web page
```
On line 1, we try to change the content on the web page using `innerHTML` property. To understand how that happens we need to know that-
- The  `document` is an object whose property is `body` that we are accessing using the dot notation.
- Now `body` is also an object whose property `innerHTML` is accessed using the dot notation.
- And, finally we use an equal sign to change the value of innerHTML to 'hello'.

3. document.querySelector(): let's us get any element from the page and put it inside the JavaScript.
_Example:_
```html
<html>
  <head>
    <title>DOM</title>
  </head>
  <body>
    <button>Hello</button>
    <button class="js-button">Bye</button>
    <script>
      console.log(document.querySelector('button')) // <button>Hello</button>
      console.log(document.querySelector('.js-button')) // We can also select elements with their class attribute
      console.log(document.querySelector('button').innerHTML) // This gives us the HTML inside the button
    </script>
  </body>
</html>
```
