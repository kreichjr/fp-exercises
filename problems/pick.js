/*

Returns a partial copy of an object containing only the keys specified.
If the key does not exist, the property is ignored.

*/

import { each } from '.';

export default function pick(object, keys) {
  // Your code here
  let returnedObj = {};
  
  each(object, (value, key, collection) => {
  	if (keys.includes(key)) {
      returnedObj[key] = value
  	}
  })

  return returnedObj;
}
