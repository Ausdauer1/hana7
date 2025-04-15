const assert = require("assert");

const arr = [1, 2, 3, 4, 5];
arr.join(""); // , 로 구분
const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
const a1 = arr2.slice(1, 3);
console.log("🚀 a1:", a1);
console.log(arr2);
// const a2 = arr2.splice(1, 2);
// console.log("🚀 a2:", a2);
// console.log(arr2);
// ex2) [3]부터 모두 다 추출
console.log(arr2.slice(2));
// ex3) [2,3,4] 제거하기
const a2 = arr2.splice(1, 3);
console.log("🚀 a2:", a2);
// ex4) 복원하기
arr2.splice(1, 0, ...a2);
console.log(arr2);
// ex5) [3] 부터 끝까지 제거하기
const a3 = arr2.splice(2);
console.log("🚀 a3:", a3);
// ex6) 복원하기
arr2.splice(2, 0, ...a3);
console.log(arr2);
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
const arr3 = [1, 2, "X", "Y", "Z", 4, 5];
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
arr2.splice(2, arr2.length, "X", "Y", "Z", 4, 5);
arr2.splice(2, Infinity, "X", "Y", "Z", 4, 5);
console.log(arr2);
// - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
arr2.splice(2, 3, 3);
console.log(arr2);

arr2.splice(2, 1, "X", "Y", "Z");
console.log(arr2);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
a8 = [...arr2.slice(0, 2), "X", "Y", "Z", ...arr2.slice(4)];
assert.deepStrictEqual(a8, [1, 2, "X", "Y", "Z", 4, 5]);
