"use strict";


// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  let wordCount = {}

  let newPhrase = phrase.split(' ')

  for (const word in newPhrase) {
    if (newPhrase[word] in wordCount) {
      wordCount[newPhrase[word]]+= 1
    } else {
      wordCount[newPhrase[word]] = 1
    }
  }

  return wordCount

}

console.log(countWords('I missed my my lovely friend friend JavaScript!'))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code

  let melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }  

  if (price in melonPrices) {
      return melonPrices[price].sort()
    } else {
      return
    }
}

console.log(getMelonsAtPrice(3.25))