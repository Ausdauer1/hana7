const n = 1;
const b = true;

const nb = n + b;
// 문자열이 1순위, 2순위가 산술 true => 1
console.log("🚀 ~ nb:", nb);

const nil = null;
const nArr = [];
const n_nil = n + nil;
console.log("🚀 ~ n_nil:", n_nil);
console.log("🚀 ~ n_nArr:", n + nArr);

const undef = undefined;
// number로 바뀌면 0이 안됨
const n_undef = n + undef;
console.log("🚀 ~ n_undef:", n_undef);
console.log("+'' =", +"");
console.log("+'' =", +undef);

console.log("============================");

let x = 5;
console.log(3 - -x); // ? →        , 10 / 0 ⇒⇒⇒ error?
console.log(10 + -x * 2); // ? →
console.log(-10 * -x * -2); // ? →
console.log((-10 / -x) * -2); // -1 or -4 →
console.log(2 ** (3 ** 2)); // 64(82) or 512(29) ?
console.log(x++, ++x); // ? →     cf. log: function(x, y, …z)

//제곱은 뒤에서 부터 들어감

let aa = 1;
let bb = 2; // let a = 1; let b = 2;
let cc = (aa++, bb++); // 쉼표 연산자와 할당 연산자 ⇒ 증감연산자
let dd = (aa--, bb + aa); // a++; let d = b + a;
console.log(aa, bb, cc, dd);

// d = void(c = a+b)
// d; c = a+b
Math.ceil; // 올림
Math.floor; // 내림
Math.trunc; // 절삭
console.log(Math.round(123.56));

let arr = [1, 2];
Object.keys(arr);
Object.values(arr);
Object.entries(arr);
