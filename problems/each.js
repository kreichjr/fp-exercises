/*

Calls a callback iterator(value, index/key, collection) for each element of collection.
Accepts both lists and objects.

Note: Some functions such as this one which take a list can work on either
an Array or a String

Note: 'each' does not have a return value, but rather simply runs the
callback function over each item in the input collection.

*/

export default function each(collection, callback) {
  // Your code here
  
  if (Array.isArray(collection) === true || typeof(collection) === "string") {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (typeof(collection) === "object") {
  	for (const key in collection) {
  	  callback(collection[key], key, collection);
  	}
  }
}

