/*

Returns the mean of the given list of numbers.

*/

import { divide, sum } from '.';

export default function mean(array) {
  // Your code here
  if (array.length === 0) {
    return Infinity
  }  

  return divide(sum(array), array.length);
  
  
}
