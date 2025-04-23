interface IsPositiveFunc {
  (arg: number): boolean;
}

const isPositive: IsPositiveFunc = (num) => num >= 0;

// 사용 예
isPositive(5);

// 에러 예
isPositive("foo");
const res: number = isPositive(123);

function sumOfPos(arr) {
  return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 사용 예
const sum: number = sumOfPos([1, 3, -2, 0]);

// 에러 예
sumOfPos(123, 456);
sumOfPos([123, "foobar"]);

export {};
