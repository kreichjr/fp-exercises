/*

Returns true if its arguments are equivalent, false otherwise.
For arrays and objects, it should do a shallow equality
for each property or item in each collection.

Challenge: for the challenging version, you will need to do a deep
equality on objects and arrays.  This will require recursion. You
will also need to handle cyclical objects.

*/

import { keys, reduce } from '.';

export default function equals(valA, valB) {
  // Your code here
  if (typeof(valA) != "object") {
  	return (valA === valB)
  } else {
  	if (Array.isArray(valA) !== Array.isArray(valB)) {
  	  return false
  	}
  	let valAKeys = keys(valA)
  	return reduce(valAKeys, (acc, value) => {
  	  return (acc && !(valA[value] !== valB[value]))
  	}, true)
  }
}
