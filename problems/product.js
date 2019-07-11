/*

Multiplies together all the elements of a list.

*/

import { multiply, reduce } from '.';

export default function product(array) {
  // Your code here
  return reduce(array, (total, num) => {
  	return multiply(total, num)
  })
}
