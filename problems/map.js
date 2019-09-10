/*

Return the results of applying an iterator to each element.
Works on objects and arrays.

Note: 'map' is a useful iterative function that works a lot
like 'each', but in addition to running the operation on all
the members, it returns a new mapped version of the input.

*/

import { each } from '.';

export default function map(collection, iterator) {
  // Your code here
  if (typeof(collection) == "object" && collection === null) {
  	return undefined //Should be an error
  }

  // Check to see if the collection is an array or object
  if (Array.isArray(collection)) {
    let newMap = []
  	each(collection, (value, index, collection_two) => {
      newMap.push(iterator(value))
  })
  return newMap
  } else {
  	//Collection isn't an array, so assume it's an object
  	let newMap = {}
  	each(collection, (value, index, collection_two) => {
  	  newMap[index] = iterator(value)
  	})

  	return newMap
  }
  
}
