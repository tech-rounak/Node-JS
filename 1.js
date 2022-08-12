// console.log("SUM");

function sum() {
  var a = 8;
  var b = 9;
  var sum = a + b;
  console.log(sum);
}

function SI(principal, rate, tenure) {
  var interest = (principal * rate * tenure) / (100 * 12);
  // console.log(interest);
  return interest;
}
console.log("The Simple Interest=" + SI(1000, 5, 12));

const sum1 = function (a, b) {
  return console.log("Sum=" + (a + b));
};
sum1(10, 20);
