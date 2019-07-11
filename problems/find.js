/*

Returns the first element of the list which matches
the predicate, or undefined if no element matches.

*/

import { each } from '.';

export default function find(array, predicate) {
  // Your code here
  let returnValue = undefined
  each(array, (value, index, collection) => {
  	if (predicate(value) && returnValue === undefined) { returnValue = value }
  })
  return returnValue
}
