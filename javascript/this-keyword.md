## this keyword
_Example 1:_
```js
let counter = createCounter()
let counter1 = createCounter()

function createCounter() {
  return {
    count: 0,
    increment: function() {
      this.count++
    }
  }
}

counter1.increment()
counter1.increment()
console.log(counter1)
```
Now, let's write the same code without making use of Object.
_Example 2:_
```js
var count = 0
function incrementCounter() {
  this.count++
  console.log(this)
}

incrementCounter()
incrementCounter()
console.log(count)
```
In the previous example the `this` keyword was referring to the object that was used inside. But, in the second example, it works the same way because this time it is referring to the Window Object.
## Constructor in JavaScript
```js
function Car(name) {
  this.name = name
  this.start = function() {
    console.log(this.name + ' started')
    console.log(this)
  }
}

let swift = new Car('Swift')
swift.start()
```
Even though this function lies in the Global EC, it will not point from the Window Object but in this case it will point at the `Car` object that we just created and this is happening because we are making use of `new` keyword. The `new` keyword creates a new object literal and declares all the properties inside it and this same thing was happening in the example 1 of `this` keyword.
If we remove the `new` keyboard from our code we will end up with a Undefined TypeError because, now the `this` keyword points to the Window Object.

Conclusively, the `this` keyword changes it's reference depending on where it is been called from.
