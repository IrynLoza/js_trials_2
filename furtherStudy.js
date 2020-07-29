"use strict";


function wordsInCommon(words1, words2) {
  // Replace this with your code

  let words1Set = new Set(words1);
  let words2Set = new Set(words2);

  let result = new Set();

  for (const item of words1Set) {
    if (words2Set.has(item)) {
      result.add(item);
    }
  }

  return Array.from(result)

}

console.log(wordsInCommon(['cheese', 'cheese', 'dessert', 'creame'], ['dessert', 'dessert', 'creame']))


function kidsGame(names) {
  // Replace this with your code
}
