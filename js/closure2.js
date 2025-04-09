const assert = require("assert");

// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.

// 1번문제
function loopFibonacci(n) {
  let arr = [0, 1];
  let cnt = 0;
  if (n === 0 || n === 1) return n;
  while (arr.length <= n) {
    arr = [...arr, arr[cnt] + arr[cnt + 1]];
    cnt++;
  }
  return arr[cnt] + arr[cnt - 1];
}

// 2번문제
function recurFibonacci(n, cnt = 0, acc = [0, 1]) {
  if (n <= 1) return n;
  if (n === 2) return acc[cnt] + acc[cnt + 1];
  acc = [...acc, acc[cnt] + acc[cnt + 1]];
  return recurFibonacci(n - 1, cnt + 1, acc);
}

// console.log(loopFibonacci(5)); // 5
// console.log(recurFibonacci(7)); // 13
// console.log(recurFibonacci(7)); //
// memoFibonacci(5); // 5
// memoFibonacci(7); // 13
// memoFibonacci(30); // 832040
function memoized(fn) {
  const memoizedTable = { 0: 0, 1: 1 };
  console.log("a");
  return function B(k) {
    console.log("c");
    return memoizedTable[k] ?? (memoizedTable[k] = fn(k));
  };
}

const memoFibonacci = memoized((n) => {
  console.log("b");
  if (n <= 1) return n;
});

console.log(memoFibonacci(1));
