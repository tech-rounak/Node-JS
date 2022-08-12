console.log("Start");

setTimeout(() => {
  console.log("Procesing");
}, 1000);
console.log("End");

x = (msg) => {
  console.log("hi " + msg);
};
setTimeout(x, 1000, "Rounak");
//syntax    setTimeout(function name, time in millisec, parameter);
