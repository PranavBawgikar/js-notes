## JavaScript Arrays
In JavaScript, the array elements needn’t be of the same data-type.
```javascript
const arr = ['hey', 'hi', 'yo', 100, true];
console.log(arr); // ['hey', 'hi', 'yo', 100, true]
console.log(arr[0]) // 'hey'

// We can also change the value in an array
arr[3] = 200
console.log(arr) // ['hey', 'hi', 'yo', 200, true]
```
_Declaration:_
```js
// Arrays caan be implemented in many ways:
var space = ["moon","star","sun"];
var space2 = new Array("moon","star","sun");
```
In JavaScript, Arrays itself are also a value so you can nest an array inside an array.
```js
var space = ["moon","star","sun", [1, 2]];
```
Now when we try to check the type of an array it exhibits a weird behavior, it will tell us that it is an object. Arrays are special type of objects. The `typeof` operator returns object for arrays.
<br />If we want to check if something is specifically an array, we can use this code:
```js
console.log(Array.isArray([1, 2])) // true
```


## Properties and Methods
Creating a array that will be used to demonstrate all the properties and methods of arrays.
```js
const groceries = ['banana', 'pear', 'apple', 'orange']
console.log(groceries[0]) // 'banana'
```
#### length
`length` is an array _property_ that returns the number of elements you have in a given array.
```js
console.log(groceries.length) // 4
```
#### `push()`
`push` _method_ adds one or more elements to the end of an array and returns the new length of the array.
```js
groceries.push('cookie')
console.log(groceries) // ['banana', 'pear', 'apple', 'orange', 'cookie']
```
#### `slice()`
The `slice()` _method_ can be used to create a copy of an array or return a portion of an array. Note that the `slice()` method does not alter the original array but instead creates a duplicate copy.
```javascript
// Without the start and the end parameter
console.log(groceries.slice()) // Creates a copy of the original array => ['banana', 'pear', 'apple', 'orange', 'cookie']

// Using the optional start parameter to set a starting position for selecting elements from the array 
console.log(groceries.slice(2)) // ['apple', 'orange', 'cookie']

// We can also use negative indexes which will start extracting elements from the end of the array
console.log(groceries.slice(-2)) // ['orange', 'cookie']

// If the start parameter is greater than the last index of the array, then an empty array will be returned
console.log(groceries.slice(5)) // []

// Using the start and the end parameters
// If an end position is specified then the slice() method will extract the elements from the start position up to the end position
// The end position will not be included in the extracted elements of the new array
console.log(groceries.slice(2,4)) // ['apple', 'orange']
```
#### `splice()`
Unlike the `slice()` method, the `splice()` method will change the contents of the original array.
The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
If nothing was removed from the array, then the return value will just be an empty array.

_Syntax_:
`splice(start, optional delete count, optional items to add)`
```js
// If we wanted to add another item to the list we can write
groceries.splice(1, 0, "waffles")
// Since we are not deleting anything our delete count will be zero
console.log(groceries) // ['banana', 'waffles', 'pear', 'apple', 'orange', 'cookie']
console.log(groceries.splice(1, 0, "waffles")) // [], It returns an empty array because nothing was removed from here

// If we want to remove 'apple' from the array we can use start and delete parameters
groceries.splice(2, 1) // ['apple']
```
The `slice` and `splice` array methods might seem similar to each other, but there are a few key differences. <br />The `slice()` method can be used to create a copy of an array or return a portion of an array. It is important to note that the `slice()` method does not alter the original array but instead creates a shallow copy.

```javascript
//sum of array elements
const sumArray = (numbers) => {
    let result = 0;
    for(const number of numbers){
      console.log(number)
      result = result + number
    }
    return { result }
  }
  const nums = [1,2,3,4]
  console.log(sumArray(nums))

```
```javascript
//finding max value in an array
const max = (numbers) => {
    let result = numbers[0]
    for(const number of numbers){
      if(number > result){
        result = number
      }
    }
    return { result }
  }
  console.log(max([1, 2, 4, 5, 3]))

```
```javascript
//checking the frequency of letters in a phrase
const letterFreq = (phrase) => {
    console.log(phrase)
    //make a frequency object{}
    let frequency = {}
    for(const letter of phrase){
      //check if letter exists in frequency
      if(letter in frequency){
        //increment the value by +1
        //frequency[letter] = frequency[letter] + 1 can be written as or even frequency[letter]++ is also correct
        frequency[letter] += 1
        //otherwise set the value to 1
      } else{
        frequency[letter] = 1
      }
    }
    return frequency
  }
  console.log(letterFreq('lodey lagvane ki ninja technique ding ding ding'))
  //incremental operators: ++, --, +=, -= 
```
###### Checking for frequency of words in your phrase
```javascript
const wordFrequency = (phrase) => {
  console.log(phrase)
  let frequency = {}
  words = phrase.split(' ')
  for(word of words){
    if(word in frequency){
      frequency[word] += 1
    } else{
      frequency[word] = 1
    }
  }
  return frequency
}
console.log(wordFrequency('haha lol haha'))
```
#### `filter()`
_Example 1:_ 
```js
const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]
```
So let's assume that we want to get the list of items that are less than or equal to $100 price and to achieve this we need to use the `filter()` method to filter out everything that's not under a $100 price range.
```js
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems)
```
The `filter()` method just takes a single parameter, in this case `item` which represents each item inside the array and then we return a true or false statement whether or not we want to include that in the new array. <br />
The great thing about the `filter()` method and infact all the other array methods is that they don't change the underlying object that you're filtering over. <br />
_Example 2:_ 
```javascript
let arr = [23, 45, 0, 3, 5, 34];
let a1 = arr.filter((a) => {
  return a < 10;
})
console.log(a1);
```
#### `reduce()`
```javascript
let arr1 = [1, 2, 4, 5, 3, 1];
let a2 = arr1.reduce((h1, h2) => {
  return h1 + h2;
})
console.log(a2);
//output: 16
//Basically, we sum up all the array elements
```
#### `map()`
Let's just say we want to get the name of every item and we can do this by using the `map()` method. It is similar to the above code we implemented, just modifying 'filter' to 'map'.
_Example:_ 
```js
const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames)
```
All it does is return a new array full of all the names from our array.
#### `find()`
It is used to find a single object in an array. Again, it is similar to the previously discussed methods, it takes one parameter.
```js
const foundItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(foundItem)
```
It returns the very first item that it finds in the array.
## Arrays are References
```js
const array1 = [1, 2, 3]
```
The variable `array1` doesn't actually contain the value [1, 2, 3], the values are saved somewhere in the computer's memory and the `array1` variable only contains a reference and points to the location where the values are present. <br />
So, if we create a copy of the variable
```js
const array1 = [1, 2, 3]
const array2 = array1
```
The variable `array2` will not have a copy of the values but the reference. So now both the variables are pointing to the same array.
```js
const array1 = [1, 2, 3]
const array2 = array1
array2.push(4)
console.log(array1) // [1, 2, 3, 4]
console.log(array2) // [1, 2, 3, 4]
```
We can see that even if we added value 4 to the `array2`, both the arrays were modified and that's because arrays are references.<br />
We can also avoid this behavior by making a copy of the values by using the `slice()` method. This will enable both the variables to point to two different arrays.
```js
const array1 = [1, 2, 3]
const array2 = array1.slice()
array2.push(4)
console.log(array1) // [1, 2, 3]
console.log(array2) // [1, 2, 3, 4]
```
<br /><br />







## JavaScript Loops
### Looping through an array
```js
const todoList = [
  'watch youtube',
  'make dinner',
  'wash dishes'
]

for(let i = 0; i <= todoList.length - 1; i++ ) {
  console.log(todoList[i])
}
```
### Accumulator Pattern
Let's say we have an array of numbers like [1, 1, 3], how do we calculate the total?<br/>
_Steps:_
1. Create a variable to store the result.
2. Loop through the array and update the result.
```js
const nums = [1, 1, 3]
let total = 0 // Accumulator variable

for(let i = 0; i < nums.length; i++) {
  total += nums[i] // Accumulating the values of the array
}

console.log(total)
```

Creating a copy of the given array only the numbers are doubled:
```js
const nums = [1, 1, 3]
const nums2 = []
let total = 0 // Accumulator variable

for(let i = 0; i < nums.length; i++) {
  const num = nums[i] * 2
  nums2.push(num)
}

console.log(nums2)
```

Counting the number of letters in a string
```javascript
const letterCounter = () => {
  const phrase = 'hey, can you go to grocery store with me?'
  for(letter of phrase){
    console.log(letter)
  }
}
console.log(letterCounter())
//for in loop will get you the index of the elements 
//for of loop will get you the actual elements there are
```
