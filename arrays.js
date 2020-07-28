"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code

  for (let i = 0; i < items.length; i+= 1) {
    console.log(`${items[i]} ${i}`)
  }
}

printIndices(['apple', 'berry', 'cherry'])


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = [];

  for (let i = 0; i < items.length; i+= 1) {
    if ( i % 2 === 0 ) {
      result.push(items[i])
    }
  }

  console.log(result)

}

everyOtherItem(['apple', 1, 'berry', 'cherry', 5, 10])


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
