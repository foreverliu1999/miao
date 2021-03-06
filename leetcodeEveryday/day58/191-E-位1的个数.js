/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//  var hammingWeight = function(n) {
//   var count = 0;
//   while (n > 0) {
//     var d = n % 2;
//     if (d) {
//       count++;
//     }
//     n = (n - d) / 2;
//   }
//   return count;
// };

var hammingWeight = function (n) {
  var count = 0;
  while (n > 0) {
    count++;
    n = (n & (n - 1)) >>> 0;
  }
  return count;
}