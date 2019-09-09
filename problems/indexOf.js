/*

Returns the first index at which value can be found in the list,
or -1 if value is not present in the list.

Challenge: Should work on strings, and target can be multiple letters.

*/

import { each, slice, equals, reduce } from '.';

export default function indexOf(list, target) {
  // Your code here
  
  let foundIndex = false
  let indexValue = -1

  each(list, (value, index, collection) => {
    if (!foundIndex && equals(target, value)) {
      
      foundIndex = true
      indexValue = index
      
    }
  })

  return indexValue
}
