/*

Returns the mean of the given list of numbers.

*/

import { divide, sum } from '.';

export default function mean(array) {
  // Your code here
 
  return divide(sum(array), array.length);
  
  
}
