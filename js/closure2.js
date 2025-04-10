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

let loop = 0;
// 1번문제 답
function loopFibonacciA(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i += 1) {
    loop++;
    // let t = prev;
    // prev = curr;
    // curr = t + curr;
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

console.log(loopFibonacciA(7));

// 2번문제
function recurFibonacci(n, cnt = 0, acc = [0, 1]) {
  if (n <= 1) return n;
  if (n === 2) return acc[cnt] + acc[cnt + 1];
  acc = [...acc, acc[cnt] + acc[cnt + 1]];
  return recurFibonacci(n - 1, cnt + 1, acc);
}

let recur = 0;
// 2번문제 답
function recurFibonacciA(n) {
  recur++;
  if (n <= 1) return n;
  return recurFibonacciA(n - 2) + recurFibonacciA(n - 1);
}

// console.log(recurFibonacciA(30));
// console.log(loopFibonacci(5)); // 5
// console.log(recurFibonacci(7)); // 13
// console.log(recurFibonacci(7)); //
// memoFibonacci(5); // 5
// memoFibonacci(7); // 13
// memoFibonacci(30); // 832040

// 3번문제
function memoized(fn) {
  const memoizedTable = { 0: 0, 1: 1 };
  return function B(k) {
    console.log("c");
    return memoizedTable[k] ?? (memoizedTable[k] = fn(k));
  };
}

const memoFibonacci = memoized((n) => {
  let arr = [0, 1];
  let cnt = 0;
  while (arr.length <= n) {
    arr = [...arr, arr[cnt] + arr[cnt + 1]];
    cnt++;
  }
  console.log(arr);
  return arr[cnt] + arr[cnt - 1];
});

// 3번문제 답
let memo = 0;
function memoizedA(fn) {
  const cache = {};
  return function (k) {
    return cache[k] || (cache[k] = fn(k));
  };
}
const memoFibonacciA = memoizedA((n) => {
  memo++;
  if (n <= 1) return n;
  return memoFibonacciA(n - 2) + memoFibonacciA(n - 1);
});

function memoizedB(fn) {
  const cache = {};
  return (k) => cache[k] || (cache[k] = fn(k));
}
const memoFibonacciB = memoizedB((n) => {
  if (n <= 1) return n;
});

// console.log(memoFibonacci(0));
// console.log(memoFibonacci(1));
// console.log(memoFibonacci(5));
// console.log(memoFibonacciA(5));
// console.log(memoFibonacci(5));
// console.log(memoFibonacci(6));
// console.log(memoFibonacciA(7));
// console.log(memoFibonacci(8));

assert.equal(loopFibonacciA(5), 5);
assert.equal(loopFibonacciA(7), 13);
assert.equal(loopFibonacciA(7), 13);
assert.equal(loopFibonacciA(30), 832040);

assert.equal(recurFibonacciA(5), 5);
assert.equal(recurFibonacciA(7), 13);
assert.equal(recurFibonacciA(7), 13);
assert.equal(recurFibonacciA(30), 832040);

assert.equal(memoFibonacciA(5), 5);
assert.equal(memoFibonacciA(7), 13);
assert.equal(memoFibonacciA(7), 13);
assert.equal(memoFibonacciA(30), 832040);

console.log(loop, recur, memo);
