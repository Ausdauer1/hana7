// "use strict";

f = 1;
// 상수에다가 값 할당 ㄴㄴ
NaN = 1;
Infinity = 0;
//
function f(a, a) {
  console.log("outer f", a);
}
delete f; // error
{
  f(100);
  function f(a) {
    console.log("block f", a);
  }
}
f(200);
