/*

Returns the result of concatenating the given lists.

Note: both arguments should be of the same type (array or string).

*/

import { each } from '.';

export default function concat(listA, listB) {
  // Your code here
  if (typeof(listA) != typeof(listB) && (Array.isArray(listA) === false || Array.isArray(listB) === false))
  	return "Error - Type Mismatch"

  let newList = []

  for (let i = 0; i < listA.length; i++) {
	  newList.push(listA[i])
	}
	for (let j = 0; j < listB.length; j++) {
	  newList.push(listB[j])
	}

  if (typeof(listA) == "object") {
	return newList
	
  } else if (typeof(listA) == "string") {
    return newList.join('')

  }
}
