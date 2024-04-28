## Advanced Functions
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
These functions don't have a name of their own. <br />
```js
const function2 = function() {
  console.log('hello')
}
```
One disadvantage of defining function with this approach is that it does not support Hoisting.
### Storing a function inside an object
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
### Functions
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
