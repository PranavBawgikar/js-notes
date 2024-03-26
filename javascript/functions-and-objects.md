## Functions in JavaScript
Setting a default value for a parameter of a function
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
<br /><br />
## Objects in JavaScript
Objects are a type of variable, quite similar to array but they have something called key-value pairs. Inside an object, we can store any type of values

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
3. localstorage:
   It is used to save the values more permanently. It only supports string. Remember, when something doesn't exist in localstorage it gives out null.
   - `localStorage.setItem()` is used to save a value inside the localstorage.
   - `localStorage.getItem()` is used to get a value out of localstorage.
