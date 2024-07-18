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

`Note: In JavaScript, nested multi-line comments are not allowed.`
## JavaScript Math
Every arithmetic operation in JavaScript or any other programming language for that matter has to follow something known as "Order of operations".

The order is as follows:
1. Paranthesis
2. Multiplication & Division
3. Addition & Subtraction
4. Comparison Operators (<, >, <=, >=, ==, !=)
5. Logical Operators (&&, ||, !)

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
console.log(Math.round(2.2)) // 2
console.log(Math.round(2.8)) // 3
```

## JavaScript Strings
In JavaScript, you can add or cancat strings in the following wway:
```js
console.log('hi' + 'there') // 'hithere'
// To check the type of a value
console.log(typeof 'hello') // 'string'
console.log(typeof 2) // 'number'

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
### Properties and Methods
#### `charAt()`
This method returns the character in a string based on the index position provided.
```js
let useraName = 'Chukku89'
console.log(userName.charAt(0)) // C
```
#### `indexOf()`
This method returns the index of the first occurence of the character.
```js
let userName = 'Chukku89'
console.log(userName.indexOf('o')) // 2
```
#### `lastIndexOf()`
This method returns the index of the last occurrence of the character.
```js
let userName = 'Chukku89'
console.log(userName.lastIndexOf('o')) // 5
```
#### `length`
This is a property and not a method which is used to get the length of a string.
```js
let userName = 'Chukku89'
console.log(userName.length) // 8
```
#### `trim()`
Maybe there is a bunch of whitespace after or before your string and you want to get rid of it then in that case you can use this method.
```js
let userName = 'Chukku89   '
console.log(userName.trim())
```
#### `toUpperCase()` and `toLowerCase()`
These methods are used to transform your string to uppercase and lowercase format respectively.
```js
let userName = 'Chukku89'
console.log(userName.toUpperCase()) //CHUKKU89
console.log(userName.toLowerCase()) //chukku89
```
#### `repeat()`
This method is used to repeat a string number of times. Within the paranthesis of the methodd you mention the number of times you want the string to be repeated.
```js
let userName = 'Chukku89'
console.log(userName.repeat(3)) //Chukku89Chukku89Chukku89
```
#### `startsWith()`
This method is used to determine if a string starts with a given character or not. It returns a boolean value. This method can be especially useful when working with `if` statements.
```js
let demo = 'Demo'
let result1 = demo.startsWith(' ')
console.log(result1) // false
let result2 = demo.startsWith('D')
console.log(result2) // true
```
#### `endswith()`
The antonymous method to `startsWith()` method.
```js
let demo = 'Demo'
let result1 = demo.startsWith('o')
console.log(result1) // true
## JavaScript Variables
```
#### `includes()`
This method tells whether the string contains a particular character or not.
```js
let userName = 'Chukku89'
let result = userName.includes(' ')
if(result) {
  console.log('Your username can't include " "')
} else {
  console.log(userName)
}
```
#### `replaceAll()`
```js
let phoneNumber = '123-456-7890'
phoneNumber = phoneNumber.replaceAll('-', ' ')
console.log(phoneNumber)
```
#### `padStart()`
The value within this method is a sspecified length i.e., how many characters should the string be? and the second value is used to pad the string with any desired character.
```js
let phoneNumber = '123-456-7890'
phoneNumber = phoneNumber.padStart(15, '0')
console.log(phoneNumber) // 000123-456-7890
```
Basically, we are trying to tell here that the string should be padded with `0` until it is 15 characters long.
#### `padEnd()`
Pad the end of the string with a specified character until it is `x` characters long.
```js
let phoneNumber = '123-456-7890'
phoneNumber = phoneNumber.padEnd(15, '0')
console.log(phoneNumber) // 123-456-7890000
```
Some syntax rules for variables:
1. Can't use special words. Example: `let`
2. Can't start with a number.
3. Can't use special characters except: $, _

There are 3 ways to create variables in JavaScript:
1. `var`: Originally `var` keyword was used in JavaScript to declare variables before ES6 (ECMAScript). It is not used anymore due to some issues. Later, a new keyword `let` was introduced which is block-scoped, and can be updated but not re-declared on the contrary, `var` keyword could be re-declared and updated in its scope.
2. `let`: The `let` keyword is used to decalare variables whose value might change at different parts of the program. You can reuse these variables as you wish.
3. `const`: It creates a variable like `let`. Only difference is that we cannot change its value later. It makes our code safer and easier to understand therefore the best practice is to use `const` by default.

_Example:_
```javascript
//Declaring a variable
let name = “Pranav”;
console.log(name);

let b = 'Pranav';
{
  let b = 'Bawgikar';
  console.log(b);
}
console.log(b);
/ Sso in this example, if you replace let with var and then if you check output you will get 'Bawgikar' twice.

// Demostration of `let`
let count = 0
count = 1 // The variable can be reassigned with the new value

// Demostration of `const`
const url = 'http://google.com'
const visitors = 12
```
`Note: Variables in JavaScript can use uppercase or lowercase alphabets.`
### Temporal Dead Zone
The variables that we declare with `let` and `const` are unaccessible until and unless we initialize them or assign any value to it. But, this doesn't mean the `let` keyword is not hoisted, it does allocate memory to the variable when the <a href="https://github.com/PranavBawgikar/js-notes/blob/main/javascript/js-execution-context.md">Global Execution Context</a> is created.
### Variable Shadowing
```js
let foo = 'bar'
var bar = 'foo'
if(true) {
  let foo = 'baz'
  var bar = 'foobar'
  console.log(foo) // baz
  console.log(bar) // foobar
}
console.log(foo) // bar
console.log(bar) // foobar
```
The `let` keyword works according to the block scope so you can see two different values when we do `console.log(foo)` which prints value according to the available scope. But, `var` keyword doesn't work like that. It always ignores the block scope. However, the same `var` keyword behaves differently when used inside a function's scope.
```js
let foo = 'bar'
var bar = 'foo'
function sayHello() {
  let foo = 'baz'
  let bar = 'foobar'
  console.log(foo) // baz
  console.log(bar) // foobar
}
sayHello()
console.log(foo) // bar
console.log(bar) // foo
```
This is why JavaScript is called a confusing language by many.
### Illegal Variable Shadowing
Let's say you have declared a variable using `let` keyword on the Global EC and you declare a variable with the same name using the `var` keyword inside a `if` block scope it will give you a SyntaxError. That means we cannot re-declare that `let` variable with `var` keyword even if it is in another block scope.

## JavaScript Boolean
A boolean is a data type whose value represents whether something is true or false. This data type has only two possible values either _true_ or _false_. 
### Truthy and Falsy values
- List of Truthy values: Any value that is not included in the Falsy values list is a Truthy value.
- List of Falsy values: False, 0, ' ', NaN, undefined, null.

These Truthy and Falsy values can be used as shortcuts in our code.
_Example:_
```js
const cartQuantity = 5
// Usually we check like
if(cartQuantity > 0) {
  console.log('The cart has products') // We only wanna display this message if our cart has products
}
// But now instead of doing this comparison we can just write
if(cartQuantity) {
  console.log('The cart has products')
}
// These values also work with logical operators
console.log(!0) // It will output 'true' since zero is a falsy value and the '!' operator will flip it
```
_Understanding the above code:_

When `cartQuantity` = 5<br />Then `cartQuantity > 0`  will result in  `true`<br />And just writing `cartQuantity` will be a `truthy` value.
<br /><br />
When `cartQuantity` = 0<br />Then `cartQuantity > 0` will result in `false`<br />And just writing `cartQuantity` will be a `falsy` value.
