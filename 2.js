let fact = (n) => {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
};
f = fact(6);
console.log("Factorial=" + f);
