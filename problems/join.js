/*

Converts an array into a string and inserts the separator between each element.

* Note: Do not use Array.prototype.join

*/

import { dec, reduce } from '.';

export default function join(array, separator) {
  // Your code here
  let returnString = reduce(array, (joinedStr, char) => {
  	return joinedStr.toString() + separator.toString() + char.toString() 
  })
  return returnString
}
