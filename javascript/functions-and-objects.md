## Functions in JavaScript
Setting a default value for a parameter of a function <br />
_Example:_
```js
function calculateTax(cost, taxPercent = 0.1) { // Setting a default value for tax parameter, incase the user does not enter one
  console.log(cost * taxPercent)
}

calculateTax(2000, 0.1)
calculateTax(5000)
```
On the basis of how it is defined and called, functions are categorized into four types:
1.	Named Functions
2.   Anonymous Functions:
They do not have a name and can be used at one place only when it is immediately called after it is defined. It can be stored in a variable.
Example: Passing as an argument to another function:
```javascript
setTimeout(function(){
alert("This message is displayed after 5 seconds");
}, 5000);
```
3. Self-invoking Functions:
These are anonymous functions, which are invoked right after the function has been defined. No reference is maintained to this function not even to its return type.

Syntax:
```javascript
(function(){
//body
}() };
or
function(){
//body
}();
```
Example:
```javascript
(function(){
alert("this is a self invoking function");
}() );
```

4. Constructors:
A constructor is called when an object is created using the new keyword
Example:
```javascript
var addFunc = new Function("a","b","return a + b;"); //Here, the last parameter will always be the body of the function
```
is the same as
```javascript
var c = addFunc(2,3);
var addFunc = function(a,b){
return a+b;
};
var c = addFunc(2,3); 
```

<mark>To write to the browser use document.write()
To write to the console use console.log()</mark>
### Return keyword in JavaScript
You can only return one value at a time from a function, it can be a variable or an array or object.
```js
// return keyword example
function calculateSum(x, y) {
    let sum = x + y
    return sum
}

let val = calculateSum(9, 4)
console.log(val)
```
If you write a executable statment in a function after the `return` statement, it will be marked as _'Unreachable Code Detected._' which means it will not be executed.
```js
// return keyword example
function calculateSum(x, y) {
    let sum = x + y
    console.log("Before return") // Will be executed
    return sum
    console.log("After return") // Unreachable code, will not be executed
}

let val2 = calculateSum(9, 4)
console.log(val2)
```
### Some functions in JavaScript
#### `toUpperCase()`
```js
console.log("abc".toUpperCase()) // To convert any string to uppercase format
```
<br /><br />
## Objects in JavaScript
An object is a collection of related properties and/or methods. It can represent real world objects like people, products and places. An object stores key-value pairs, aka properties.

_Basic syntax:_ 
```js
const product = {}
```
_Example:_
```javascript
const person = { name: 'Leonardo', shirt: 'white' }
// Different ways to access the object properties
console.log(person.name) // Dot notation
console.log(person['shirt']) // Bracket notation
// Assigning value to a property of an object
person.phone = '1-222-333-4444'
console.log(person)
```
```js
const person = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  isEmployed: true,
  sayHello: function() { console.log("Hi, I am spongebob!")},
  sayBye: function() { console.log("Goodbye!")}
}

console.log(person.firstName) // Spongebob
person.sayHello() // Hi, I am spongebob!
```
Note that, even if an object is declared as a constant, it can be changed by adding, updating or removing its properties. If you declare two objects with the same name you get a syntax error for example "Uncaught SyntaxError: Identifier 'person' has already been declared at..." <br />
Bracket notations let's us use properties that normally don't work with dot notation. Let's say we have a property called `delivery-time` for our `product` object and if we

```js
console.log(product.delivery-time) // We get an error [Uncaught ReferenceError: time is not defined at...]
// That's because JavaScript thinks the '-' is a minus sign and it tries to do math
// So in order to use a property like this, we have to use Bracket Notation
console.log(product['delivery-time']) // 👍
```
### Nested Object
_Example:_ 
```js
const product = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  }
}

// To access
console.log(product.rating.count)
```
We can also store a function inside an object. It works because function is just another type of value in JavaScript. Functions stored inside an object are known as Methods.
An example to this statement could be `console.log()` and `Math.random()`. Console and Math are objects provided by JavaScript and log and random are functions stored inside the respective objects.
One thing to note here is that the console and math objects are known as built-in objects as they are built-in to the language.
```js
console.log(typeof console) // object
console.log(typeof console.log) // function
```

_Example for storing function in an object:_ 
```js
const product = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  }
  fun: function demo() {
    console.log('Function inside the object')
  }
}

// To access
product.fun()
```
### Built-in Objects
1. JSON:
   JavaScript Object Notation. It is more universal than the JavaScript object syntax and can be understood by almost every programming language whereas the JavaScript object makes sense only in JavaScript.

   _Converting JavaScript object to JSON:_
```js
console.log(JSON.Stringify(product)) // This will convert the product object into JSON
```
`Stringify` is a method of the `JSON` object. The output of stringify results in a string.

  _Converting JSON to JavaScript object:_
```js
const jsonString = JSON.Stringify(product)
console.log(JSON.parse(jsonString)) // This will convert the product object into JSON
```
2. localstorage:
   It is used to save the values more permanently. It only supports string. Remember, when something doesn't exist in localstorage it gives out null.
   - `localStorage.setItem()` is used to save a value inside the localstorage.
   - `localStorage.getItem()` is used to get a value out of localstorage.

### Looping over Objects
```js
const = {
  name: 'Pranav',
  age: 22,
  occupation: 'Engineer'
}
```
1. `Objects.keys()`: This method takes your object and returns an array of each property in that object.
   ```js
   const = {
   name: 'Pranav',
   age: 22,
   occupation: 'Engineer'
   }

   console.log(Object.keys(user))
   // Looping through the object using Object.keys()
   for(const key of Object.keys(user)) {
     console.log(`${key} => ${user[key]}`)
   }
   ```
2. `Object.values()`: This method is similar to `Object.keys()` but instead it returns you the values. But, it is not frequently used.
   ```js
   const = {
   name: 'Pranav',
   age: 22,
   occupation: 'Engineer'
   }

   console.log(Object.values(user))
   ```
3. `Object.entries()`: This method is sort of like a combination of the above two methods discussed.
   ```js
   const = {
   name: 'Pranav',
   age: 22,
   occupation: 'Engineer'
   }

   console.log(Object.entries(user))
   ```
   It outputs an array of arrays i.e., a two-dimensional array and essentially it just contains each one of your keys and values. Now let's loop over the object using `Object.entries()`.
   ```js
   const = {
   name: 'Pranav',
   age: 22,
   occupation: 'Engineer'
   }

   console.log(Object.entries(user))

   // Looping through the objects using Object.entries()
   for(const entry of Object.entries(user)) {
     console.log(`${entry[0]} => ${entry[1]}`)
   }
   ```
   It is more frequently used and looks slightly cleaner than `Object.keys()`. We can also write the above example using array destructuring.
   ```js
   const = {
   name: 'Pranav',
   age: 22,
   occupation: 'Engineer'
   }

   console.log(Object.entries(user))

   // Looping through the objects using Object.entries()
   for(const [key, value] of Object.entries(user)) {
     console.log(`${key} => ${value}`)
   }
   ```
### Object Cloning
Let's say we have an object-
```js
const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
}
```
In JavaScript, the Object data type has a method called `Object.assign()` which takes all the properties and methods from the source object and then copies them into the new object. It takes two parameters, first we pass a target object which can be an empty object or an existing object and the secondly, we pass one or more source objects.
```js
const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
}

const another = Object.assign({}, circle)
console.log(another)
```
A more simpler way to clone an object is by using the spread operator (...). Basically, the operator takes all the properties and methods and puts them into the new object.
```js
const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
}

const another = {...circle}
```
### JavaScript Math
`Math` is a built-in JavaScript object that provides a collection of math-related properties and methods.
```js
console.log(Math.PI)
console.log(Math.E) // Euler's Number
```
#### `round()`
This method is used to round <u>up</u> a decimal number to it's nearest positive integer.
```js
let x = 3.21
let y = 2
let z
z = Math.round(x)
console.log(z) // 3
```
#### `floor()`
This method is used to round <u>down</u> a decimal number to it's nearest positive integer.
```js
let x = 3.99
let y = 2
let z
z = Math.floor(x)
console.log(z) // 3
```
#### `ceil()`
This method is also used to round up a decimal number (the opposite to `floor`).
```js
let x = 3.21
let y = 2
let z
z = Math.ceil(x)
console.log(z) // 4
```
#### `trunc()`
Short for truncaate, this method eliminates any decimal portion in a number.
```js
let x = 3.21
let y = 2
let z
z = Math.trunc(x)
console.log(z) // 3
```
#### `pow()`
This method is used to raise a base to a given power.
```js
let x = 3
let y = 2
let z
z = Math.pow(x, y)
console.log(z) // 9
```
#### `sqrt()`
This method is used to find out square root of a number.
```js
z = Math.sqrt(x)
```
#### `abs()`
This method is used to find the absolute value of a number.
```js
let x = -3.21
let y = 2
let z
z = Math.abs(x)
console.log(z) // 3.21, Basically, it gives the same number but it will be positive
```
#### `min()` and `max()`
These two methods are used to find the minimum and maximum values respectively.
```js
let x = 3
let y = 2
let z = 1
let max = Math.max(x, y, z)
let min = Math.min(x, y, z)
console.log(max) // 3
console.log(min) // 1
```
