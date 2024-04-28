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
