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
