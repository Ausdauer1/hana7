// (function () {
//   console.log("im");
// })();

// function ff(a, b) {
//   console.log(a, b);
// }
// setTimeout(ff, 1000, "a", "b");
// setTimeout(() => {
//   console.log("a", "b");
// }, 1000);

function f() {
  console.log(arguments);
}
f();

function ff(a) {
  return a + 100;
}
function ff(a, b) {
  return a + b;
}
console.log(ff(10), ff(10, 20)); // ?
