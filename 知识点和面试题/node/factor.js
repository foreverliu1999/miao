// node factor.js 11110000
var number = Number(process.argv[2]);
function factor (num) {
  var factors = [];
  for (var i = 2; num > 1; i++) {
    if (num % i == 0) {
      factors.push (i);
      num = num / i;
      i--;
    }
  }
  return factors;
}
var factors = factor (number);
console.log (number + ": " + factor.join (' '));