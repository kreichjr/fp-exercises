/*

Returns an array containing the contents of the given list, followed by the given element.

*/

import { each } from '.';

export default function append(list, item) {
  // Your code here
  let appendedList = []
  each(list, (value, key, collection) => {
    appendedList.push(value)
  })
  appendedList.push(item)

  return appendedList;
}
