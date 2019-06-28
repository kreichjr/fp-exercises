/*

Returns the smaller of its two arguments.
Works on any combination of strings and numbers.

*/

export default function min(n, m) {
  // Your code here
  if (n > m) {
  	return m;
  } else if (n < m) {
  	return n;
  } else {
  	return "They're equal";
  }
}
