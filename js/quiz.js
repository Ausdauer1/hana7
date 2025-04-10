// // 1번문제
for (let i = 0.1; i <= 1; i += 0.1) {
  let a = i.toFixed(1);
  console.log(+i.toFixed(1));
  a >= 1.0 ? console.log(Math.ceil(a).toString()) : console.log(a);
}
// 숫자를 할때, +를 넣어서 숫자로 바꿔주는것 트렌드
// 교수님 답
for (let i = 1; i <= 10; i += 1) {
  console.log(i / 10);
}

// // 2번문제
for (let i = 1; i <= 10; i++) {
  let a = Math.sqrt(i);
  if (!Number.isInteger(a)) console.log(a.toFixed(3));
}
// 답
for (let i = 1; i <= 10; i++) {
  let a = Math.sqrt(i);
  if (a % 1) console.log(i, a.toFixed(3));
}

// // 3번문제
const arr = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();
console.log(today.getDay());
console.log(arr[today.getDay() - 1]);

// 답
const today1 = new Date().getDay();
// 여기서 new 는 오퍼레이터
let weekName;
switch (today1) {
  case 0:
    weekName = "일";
    break;
  case 1:
    weekName = "월";
    break;
  case 2:
    weekName = "화";
    break;
  case 3:
    weekName = "수";
    break;
  case 4:
    weekName = "목";
    break;
  case 5:
    weekName = "금";
    break;
  case 6:
    weekName = "토";
    break;
  default:
    weekName = "알 수 없음";
    throw new Error("알 수 없는 요일");
}
console.log(`오늘은 ${weekName}입니다`);
let weekName2 = "일월화수목금토"[today];
//배열도 객체임
// 문자열은 유사 배열

// // 4번문제

function addPoints(a, b) {
  let c = a.toString().split(".")[1]?.length;
  let d = b.toString().split(".")[1]?.length;
  if (!c) c = 0;
  if (!d) d = 0;
  console.log(c > d ? (a + b).toFixed(c) : (a + b).toFixed(d));
  return c > d ? (a + b).toFixed(c) : (a + b).toFixed(d);
}

addPoints(0.21354, 0.1); // 0.31354
addPoints(0.14, 0.28); // 0.42
addPoints(0.34, 0.226); // 0.566
addPoints(10.34, 200.226); // 210.566
addPoints(0.143, -10.28); // -10.137
addPoints(0.143, -10); // -9.857
addPoints2(10, -10);

// 마지막 문제 답
function plength(n) {
  // 형 변환 시킬 때, 새 변수를 쓰는 것이 좋음
  const nstr = n.toString();
  return nstr.length - Math.trunc(n).toString().length - 1;
}

function addPoints2(a, b) {
  const alen = plength(a);
  const blen = plength(b);
  console.log(alen, blen);
  const ret = (a + b).toFixed(alen > blen ? alen : blen);
  console.log(+ret);
}
function addPoints3(a, b) {
  const p = 10 ** 15;
  const ai = a * p;
  const bi = b * p;
  const ret = Math.trunc(ai + bi) / p;
  console.log(a, "+", b + "= ", +ret);
}
addPoints2(0.21354, 0.1); // 0.31354
addPoints2(0.14, 0.28); // 0.42
addPoints2(0.34, 0.226); // 0.566
addPoints2(10.34, 200.226); // 210.566
addPoints2(0.143, -10.28); // -10.137
addPoints2(0.143, -10); // -9.857
// addPoints2(-10, -10);

addPoints3(-10, -10);

function addPoints4(...args) {
  let p = 10 ** 10;
  let ret = 0;
  for (const n of args) {
    ret += Math.trunc(n * p);
  }
  ret = ret / p;
  console.log("🚀 addPoints4", args.join(" + "), "=", ret);
}

addPoints4(0.21354, 0.1); // 0.31354
addPoints4(0.14, 0.28); // 0.42
addPoints4(0.34, 0.226); // 0.566
addPoints4(-10, -10);

// Object.entries
