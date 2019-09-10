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
  if (typeof(valA) != "object" || typeof(valB) != "object") {
  	return (valA === valB)
  } else {
  	if (Array.isArray(valA) !== Array.isArray(valB)) {
  	  return false
  	}
  	let valAKeys = keys(valA)
  	let valBKeys = keys(valB)
  	
  	// This line checks if the keys from A match with obj valB 
  	let objIsSame = reduce(valAKeys, (acc, value) => {
  	  return (acc && !(valA[value] !== valB[value]))
  	}, true)

  	// Check if objIsSame is false, if so, short circuit and return false. Otherwise, run the check on valB keys
  	if (objIsSame == false) {
  	  return false
  	}

  	/* Check valB keys and return the outcome 
  	  (If we get this far, we know all the valA keys check out, so 
  	  as long as all the B keys do, we're golden) */
  	return reduce(valBKeys, (acc, value) => {
  	  return (acc && !(valA[value] !== valB[value]))
  	}, true)
  }
}
