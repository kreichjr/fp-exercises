/*

Produce a duplicate-free version of the array.

Hint: There is an opportunity here to reuse a previous function

*/

import { each, includes } from '.';

export default function uniq(array) {
  // Your code here
  let newArray = []
  
  each(array, (value, index, collection) => {
  	if (!includes(newArray, value)) {
  	  newArray.push(value)
  	}
  })

  return newArray
}
