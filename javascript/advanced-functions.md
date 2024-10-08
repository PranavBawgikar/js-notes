## Advanced Functions
Different types of functions
### Functions are values
Just like a number we can save functions inside a variable. <br />
_Example:_ 
```js
const function1 = function greeting() {
  console.log('hello')
}
console.log(function1)
```
_Output:_ 
```console
f greeting() {
  console.log('hello')
}
```
To run the function we can make a call to the function using the variable name itself.
```js
function1() // hello
```
### Anonymous Function
These functions don't have a name of their own and they are usually a function expression that you assign to a variable. <br />
```js
const function2 = function() {
  console.log('hello')
}
```
One disadvantage of defining function with this approach is that it does not support <a href="https://github.com/PranavBawgikar/js-notes/blob/main/javascript/js-execution-context.md">Hoisting</a>.
### Object Methods (storing a function inside an object)
These are functions inside an object. <br />
_Example:_ 
```js
const object = {
  num: 2,
  fun: function greeting() {
    console.log('hello')
  }
}
object.fun() // Since 'fun' represents/stores a function we can call it
```
Since functions are values, we can also pass a function to another function
_Example:_ 
```js
function run(param) {
  param()
}
run( function() { // This is called a 'Callback Hell'
    console.log('hello from another function')
})
```

### Arrow Functions
Arrow functions are a compact way of writing functions in JavaScript and are a part of the Modern JavaScript (ES6). They work the same way as regular functions do. In these, the `function` keyword is completely omitted. In essennce, arrow functions are anonymous function in nature, they cannot be named and need to stored in a variable in order to call them. <br />
_Syntax:_ 
```js
const functionName = (p1, p2, ...) => {
  // Do Some Work
}
```
_Example 1:_
```js
// Conventional way of writing functions
function sum(a, b) {
  return a + b
}
```
```js
// Converting to Arrow function
let sum2 = (a, b) => {
  return a + b
}
```
If we only have a single LOC, using an arrow function, we can write it as
```js
let sum2 = (a, b) => a + b
```
Here, it just assumes that everything after the arrow is returned which makes it more concise and easier to use.
```js
const oneLine = () => 2 + 3 // Skipping the curly braces and return statement

console.log(oneLine())
```
#### Single Parameter Functions
```js
// Conventional way
function isPositive(number) {
  return number >= 0
}
```
```js
// Converting to Arrow function
let isPositive = number => number >= 0
```
Arrow functions really shine when we deal with anonymous functions or functions that have no name.
```js
document.addEventListener('click', function() {
  console.log('click')
})
```
```js
document.addEventListener('click', () => console.log('click'))
```
Converting the above `forEach()` function to an arrow function
```js
[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach( (value) => {
  if(value === 'wash dishes') {
    console.log(value)
}
})
```
So when we are passing a function into another function like `forEach()` it is recommended to use arrow functions for more readability.
### Some advanced Functions
#### `setTimeout()`
This feature of JavaScript allows us to run a function in the future or after certain period of time. It is a built-in JavaScript function. It takes two parameters -
   - A function we want to run in the future.
   - How long to wait before running this function (a number in milliseconds)
#### `setInterval()`
This is another built-in function of JavaScript which takes the same two parameters as `setTimeout()`. It is asynchronous in nature. <br />
_Example:_ 
```js
setInterval( function() {
  console.log('Interval')
}, 3000) // This function will keep running for every 3 secs.
```
#### But, what is "asynchronous code"?
Here, the interpretor will not wait for a particular timed function to execute and then move to the next line of code instead it will set a timer and move to the next LOC. <br />
On the contrary, synchronous code waits for the current LOC to finish execution before moving to the next. Most of the code we write is synchronous, the only time it becomes asynchronous is when we use certain features of JavaScript, like `setTimeout`. One advantage of `setTimeout` is that it doesn't block our code for that certain period of time (which will be decided by the programmer to time out). It just sets up the timer in background and goes on for executing the next LOC.
#### `forEach()`
This method is mostly preferred when we want to loop through an array.<br />
_Example:_
```js
[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(function(value) {
  console.log(value)
}) // This will loop through the array and display each value

[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(function(value) {
  if(value === 'wash dishes') {
    return // Does the same work as `continue` since forEach does not support `continue` statement
}
})
```
#### `addEventListener()`
Every HTML element has a method called `addEventListener()`, it enables us to execute some code when we interact with that element. It has two parameters:
- Event, for what type of interaction we want to listen for
- A function we want to run when an event occurs
```html
<html>
  <head></head>
  <body>
    <button onClick=" " class="button">Click</button>
    <script>
      const butttonElement = document.querySelector('.button')
      buttonElement.addEventListener( 'click', () => {
        console.log('click')
      })
    </script>
  </body>
</html>
```
It also let's us add multiple event listeners for an event. An event listener can be removed using `removeEventListener()`. This function also has two parameters: Event and Function.
```js
...
const eventListener = () => {
  console.log('click')
}
buttonElement.addEventListener('click', eventListener)
buttonElement.removeEventListener('click', eventListener)
...
```
#### `filter()`
Let's say we have an array [1, -3, 5] and we want to remove all negative numbers and get [1, 5].
```js
console.log([1, -3, 5].filter((value, index) => {
  if(value >= 0) { // Returns values >= 0
    return true
  } else {
    return false
  }
}))
```
#### `map()`
It works just like `forEach()` and `filter()`. It creates a new array and whatever we return will be added to a new array.
```js
console.log([1, 1, 3].map((value, index) => {
  return value * 2
})) // [2, 2, 6]
```
#### `parseInt()`
This function parses a string and returns an integer.

Syntax: `parseInt(string, radix)`

The radix parameter is used to specify which numeral system to be used, for e.g., a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hex number to decimal number. Only the first number in the string is returned. Leading and trailing spaces are allowed here. If the first character cannot be converted to a number, parseInt() returns NaN.

_Example:_
```javascript
document.write(parseInt("10")+"<br>") //10
document.write(parseInt("12.00")+"<br>") //12
document.write(parseInt("10 20 30")+"<br>") //10
document.write(parseInt(" 90 ")+"<br>") //90
document.write(parseInt("10 years")+"<br>") //10
document.write(parseInt("years 10")+"<br>") //NaN
document.write(parseInt("020")+"<br>") //20
document.write(parseInt("12", 8)+"<br>") //10 in decimal from octal
document.write(parseInt("0x12")+"<br>") //hex 12 to decimal - 18 
```

### Getting a variable out of a file
To avoid naming conflicts, modules when importing have a unique feature to rename the variables to our liking.
```js 
import { cart } from '../data/cart.js'
```
can be written as
```js 
import { cart as myCart } from '../data/cart.js'
```
`Note: You can import a variable or a function from another file.`
