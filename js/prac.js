const prices = [
  10.34,
  "xxx",
  5.678,
  null,
  20.9,
  1.005,
  0,
  15,
  undefined,
  "0.5",
];

function average(prices) {
  const arr = [];
  for (let i of prices) {
    if (i === null || isNaN(i)) continue;
    arr.push(i);
  }
  for (const n of prices) {
    if (n == null || isNaN(n)) continue;
    // console.log("nan", n);
    //isNaN => null 은 0으로 표현됨
    // sum += Math.trunc(n * P);
  }

  const sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
  const test = Math.trunc((sum / arr.length) * 10 ** 2);
  const result2 = test / 10 ** 2;
  // const result = (sum / arr.length).toFixed(2);
  console.log(result2);
  // console.log(result);
}

average(prices);

// console.log(parseInt(5.636));
// console.log(Number.isInteger(5.636));
console.log(typeof Number(null));
console.log(isNaN(null));
