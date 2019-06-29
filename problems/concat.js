/*

Returns the result of concatenating the given lists.

Note: both arguments should be of the same type (array or string).

*/

import { each } from '.';

export default function concat(listA, listB) {
  // Your code here
  if (typeof(listA) != typeof(listB) && (Array.isArray(listA) === false || Array.isArray(listB) === false))
  	return "Error - Type Mismatch"

  if (typeof(listA) == "object") {
	  let newList = []
    each(listA, (value, key, collection) => {
      newList.push(value)
    })
    each(listB, (value, key, collection) => {
      newList.push(value)
    })
    return newList

    
  } else if (typeof(listA) == "string") {
    let newString = ""
    each(listA, (value, key, collection) => {
      newString += value
    })
    each(listB, (value, key, collection) => {
      newString += value
    })
    return newString

  }
}
