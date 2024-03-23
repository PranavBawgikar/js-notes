## JavaScript
Features of JavaScript:
- Interpreted language
- Object-based Scripting language
- Also includes features like polymorphism, encapsulation and inheritance.
- Case-sensitive

In it's most basic form JavaScript is a Synchronous, Blocking, Single-threaded language.
1. <em>Synchronous</em>: If we have two functions which logs messages to the console, code executes top down, with only one line executing at any given time
2. <em>Blocking</em>: No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed 
3. <em>Single-threaded language</em>: A thread is simply a process that your JavaScript program can use to run a task. Each thread can only do one task at a time. JavaScript has just the one thread called the main thread for executing any code.
<br /><br />
## JavaScript Math
Every arithmetic operation in JavaScript or any other programming language for that matter has to follow something known as "Order of operations".

The order is as follows:
1. Paranthesis
2. Multiplication & Division
3. Addition & Subtraction

_This is also known as the operator precedence._

`Note: Same priority operators execute from left to right.`

_Exercise:_
To calculate something like tax in JavaScript, say we have a order total of `$36.93` and we want to calculate `10%` tax on it.

As we know,

1% = 1/100

10% = 10/100 = 0.1

In JavaScript we can't directly do the multiplication of `36.93 * 10%` which would probably give us error so, if we multiply `36.93 * 0.1 = $3.693` which will be the tax on `$36.93`.
<here>

In JS calculating floats is sometimes inaccurate. So when working with money the best practice is to do the calculation in cents and then convert back to dollars
For example:
20.95 + 7.99 would give us something like 28.939999999998 which is inaccurate so instead we can do this:
(2095 + 799) / 100 which would be 28.94, we divide by 100 because each dollar has 100 cents.
To round a number use
```js
Math.round(2.2) // 2
Math.round(2.8) // 3
```

## JS Strings
In JS, you can add or cancat strings in the following wway:
```js
'hi' + 'there' // 'hithere'
// To check the type of a value
typeof 'hello' // 'string'
typeof 2 // 'number'

'hello' + 3 // When you add a string and a number, JavaScript automatically converts the number into string, this is known as Type Coercion (automatic type conversion)
```
Strings also follow the order of operations.
Strings created with backticks (`...`) are called template strings. These template strings have some special features: 
1. Interpolation: It lets us insert a value directly into a string using ${}. It is a much cleaner way of inserting values in a string.
```js
// If we want to print the following line:
// Items (2): $28.94

// Using Concatenation
console.log('Items ('+ (1 + 1) + '): $' + (2095 + 799) / 100)

//Using Interpolation
console.log(`Items (${1 + 1}): $${(2095 + 799) / 100}`)
```
2. Multi-line strings
```js
console.log(
  `some
  text`
)
// some\ntext
```
