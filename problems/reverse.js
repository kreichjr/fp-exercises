/*

Returns a new list with the elements or characters in reverse order.

Note: Must handle arrays and strings.

 */

import { each } from '.';

export default function reverse(list) {
  // Your code here
  if (typeof(list) != "string" && !Array.isArray(list)) {
  	return "Error - Invalid Type"
  }

  if (typeof(list) == "string") {
  	let newString = ""
    for (let i = list.length - 1; i >= 0; i--) {
      newString += list[i]
    }
    return newString

  } else if (typeof(list) == "object") {
    let newList = []
  	for (let i = list.length - 1; i >= 0; i--) {
      newList.push(list[i])
    }
    return newList
  }
}
