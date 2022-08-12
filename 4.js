var log = {
  sum: function (a, b) {
    console.log(a + "+" + b + "=" + (a + b));
  },
  sub: function (a, b) {
    console.log(a + "-" + b + "=" + (a - b));
  },
  pro: function (a, b) {
    console.log(a + "*" + b + "=" + a * b);
  },
  div: function (a, b) {
    console.log(a + "/" + b + "=" + a / b);
  },
};
module.exports = log;
