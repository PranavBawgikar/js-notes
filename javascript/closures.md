## Closures
Closure feature states that if a function has access to a value, it will always access to that value.
Most of the times when you are coding in other programming languages you cannot access variables outside of a function, inside of that function.
But, it is possible in JavaScript and this is what is called a closure. A closure gives you access to an outer function's scope from an inner function.
```js
function outerFunction(outerFunction) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable)
    console.log('Inner Variable: ' + innerVariable)
  }
}

const newFunction = outerFunction('Outside')
newFunction('Inside')
```
Here, the `innerFunction` has access to all of the scope of the outerFunction so it has access to the outerVariable. <br />
"A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)." - MDN
### Exception in Closures
In JavaScript every function is a closure except for functions created via `new Function` syntax. Usually a function has access to the lexical environment where it was created. But, when a function is created via the `new Function` syntax, it does not have access to the lexical environment but the global one.
```js
function getFunc() {
    let value = 'test'
    let func = new Function('value', 'alert(value)')
    return func
}

getFunc()() // Undefined
```
`new Function(...)` is a special constructor in JavaScript that creates a new function object at runtime. The arguments to `new Function` are: a comma-separated list of parameter names (in this case, just `value`) and a string representing the function's body (in this case `alert(value)`). This creates a new function that takes one argument named `alert()` function to diplay the value in a browser window.
