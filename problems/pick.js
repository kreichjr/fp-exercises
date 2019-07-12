/*

Returns a partial copy of an object containing only the keys specified.
If the key does not exist, the property is ignored.

*/

import { each } from '.';

export default function pick(object, keys) {
  // Your code here
  let returnedObj = {};
  
  each(object, (objValue, objKey, objCollection) => {
  	each(keys, (keysValue, keysKey, keysCollection) => {
      if (objKey == keysValue) {
        returnedObj[keysValue] = objValue
  	  }
  	})
  })

  return returnedObj;
}
