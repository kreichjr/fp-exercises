/*

Similar to indexOf, determine if the array or object includes a given value.

Note: must work objects as well as lists.

Challenge: Must work on strings like indexOf

*/

import { each, indexOf, equals } from '.';

export default function includes(collection, target) {
  // Your code here

  if (indexOf(collection, target) != -1) {
  	return true
  }

  return false



}
