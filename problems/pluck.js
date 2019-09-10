/*
Takes an array of objects and returns and array of the values of
a certain property in it. E.g. take an array of people and return
an array of just their ages.

TIP: map is really handy when you want to transform an array of
values into a new array of values
*/

import { map } from '.';

export default function pluck(array, key) {
  // Your code here
  return map(array, (arrayObj) => { 
  	//Check if array object is not a valid object, and if so, check if it's null
  	if (typeof(arrayObj) != "object" || arrayObj === null) {
  	  return undefined
  	}

  	return arrayObj[key] 
  })

}
