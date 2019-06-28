/*

Returns a list containing the names of all the enumerable own properties of the supplied object.

Note: the order of the output array is not guaranteed to be consistent across different JS platforms.

*/

import { each } from '.';

export default function keys(object) {
  // Your code here
  let keyList = []
  for (const key of Object.keys(object)) {
  	keyList.push(key)
  }
  return keyList;
}
