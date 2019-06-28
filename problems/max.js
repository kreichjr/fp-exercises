/*

Returns the larger of its two arguments.
Works on any combination of strings and numbers.

*/

export default function max(n, m) {
  // Your code here
  if (n > m) {
  	return n;
  } else if (n < m) {
  	return m;
  } else {
  	return "They're equal";
  }

}
