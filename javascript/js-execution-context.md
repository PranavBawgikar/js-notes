## Execution Context
Everything in JavaScript happens inside an Execution Context. When we normally run our JavaScript code, behind the scenes, a 'Global Execution Context' is created which consists of two components inside it. First is Memory where all the variables and functions are stored as a `key: value` pair. For example, `a: 10`, `function: {...}`. <br />
It is also known as Variable Environment. The second component is the Code Component or also known as the Thread of Execution. This is the place where the code is executed one line at a time. Remember, the EC is created in two phases - Memory Creation (a very critical phase) and Code Execution phase. <br />
Function in JavaScript, behave a bit differently when compared to any other programming language. In JavaScript, when a function is invoked, an altogether new EC is created. This new EC is created in the second phase (Code Execution phase) as discussed above. Similar to our 'Global EC', this new one also consists of the same two components. When the execution work of the invoked function is completed, the EC created for that particular function will be deleted. The new EC that gets created on function invocation is lexically attached/bounded to the Global EC.
## Call Stack
JavaScript has it's own _"stack-type"_ container to efficiently manage the execution of a program. At the bottom of the stack container we always have the 'Global Execution Context'. To put it in another way, whenever a program is run, the Call Stack of JavaScript is populated with the Global Execution Context first and whenever a new Execution Context is created, the same is populated above the Gloabal Execution Context one after the other. <br />
The main purpose of the Call Stack is for managing the Execution Context. <br />
> _"Call Stack maintains the order of execution of Execution Contexts"_

One thing to note is that there are many other for 'Call Stack' in JavaScript on the web such as - _Execution Context Stack, Program Stack, Control Stack, Runtime Stack and Machine Stack_. There is no need to get confused as they all represent the same meaning.
## Hoisting in JavaScript
Hoisting helps you access variables and methods even before you have defined it. Before the execution process initiates, JavaScript quickly skims through the whole code once and allocates memory to variables and functions. Let's understand this with an example: <br /> <br />
Scenario 1:
```js
var x = 9
function getName() {
  console.log("California Bound")
}

getName()
console.log(x)
```
Output:
```
California Bound
9
```
Scenario 2:
```js
getName()
console.log(x)

var x = 9
function getName() {
  console.log("California Bound")
}
```
Output:
```
California Bound
undefined
```
The reason why we get `undefined` when we try to console log the variable `x` here is because we still haven't assigned a value to `x`. But, since, JavaScript has already skimmed through the whole program and allocated memory in the Execution Context it allocated `undefined` while mcreating that memory and we tried to print it's value even before we assigned any value to it. <br /><br />
Scenario 3:
```js
getName()
console.log(x)

function getName() {
  console.log("California Bound")
}
```
Output:
```
California Bound
Uncaught RefernceError: x is not defined
```
Now, this happens because when JavaScript just skimmed through the program there was no variable `x` to allocate memory, hence the error. <br /><br />
Scenario 4:
```js
console.log(getName)

var x = 9
function getName() {
  console.log("California Bound")
}
```
Output:
```
f getName() {
  console.log("California Bound")
}
```
Unlike variable, here we were able to get some value for the `getName` since, when the memory execution was created JavaScript stored the whole function code for the `getName` key. But let's say instead of a normal function the `getName` was an arrow function we would not get the same output. <br /><br />
Scenario 5:
```js
console.log(getName)

var x = 9
ver getName = () => {
  console.log("California Bound")
}
```
Output:
```
Uncaught TypeError: getName is not a function
```
When we are executing an arrow function it behaves just like a variable, so when the memory allocation phase starts similar to `x`, `getName` will also get allocated with `undefined`. This will also be the case when we try to define a anonymous function. The `undefined` acts as a placeholder for the variable. `undefined` is usually confused with empty space but that is not the case, `undefined` is a special keyword and it does take up some memory space.
