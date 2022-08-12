let count = 1;

const fun = () => {
  console.log(count);
  count++;
  if (count == 5) clearInterval(t);
};

const t = setInterval(fun, 1000);
