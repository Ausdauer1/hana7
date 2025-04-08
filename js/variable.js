const n = 123;
const bi = 123n;

const n___bil = n === bi;
console.log("🚀 ~ n_bil:", n___bil);

const n__bil = n == bi;
console.log("🚀 ~ n_bil:", n__bil);

const nAddbi = n + Number(bi);
const nAddbi2 = BigInt(n) + bi;
console.log("🚀 ~ nAddbi2:", nAddbi2, typeof nAddbi);
console.log("🚀 ~ nAddbi:", nAddbi);

// 메모리 사이즈가 다르면 산술 연산을 할 수가 없음, type casting 형 변환 필요
// === 메모리 크기까지 비교 | == 값만 비교  >> 스택에서 비교
// null은 1bit 메모리크기가 다름, undefined는 1byte -> 둘다 . --> 더이상 타고 가는게 없다

//number 8바이트?

const s = "abc"; // constant pool에 집어넣음
const ss = new String("abc");
const s__ss = s == ss;
console.log("🚀 ~ s__ss:", s__ss, typeof s);
const s___ss = s === ss;
console.log("🚀 ~ s___ss:", s___ss, typeof ss);
const sNum = Number(s);
console.log("🚀 ~ sNum:", sNum);
const ssNum = Number(ss);
console.log("-----------------Number");
console.log(Number(s) == Number(ss), isNaN(s));

// 'abc' + '123' ==> 'abc123'  문자열로 하는 거는 cpu를 많이씀
const sss = `${s} - ${n + Number(bi)}`;
console.log("🚀 ~ sss:", sss);

const s1 = Symbol("foo");
const s2 = Symbol("foo");
const s1__s2 = s1 == s2;
console.log("🚀 ~ s1__s2:", s1__s2);

const seoulHong = Symbol.for("H");
const pusanHong = Symbol.for("H");
const s__p = seoulHong === pusanHong;
console.log("🚀 ~ s__p:", s__p);

const undef = undefined;
const nil = null;
const undef__nil = undef == nil;
const undef___nil = undef === nil;
console.log("🚀 ~ undef__nil:", undef__nil);
console.log("🚀 ~ undef___nil:", undef___nil);

class Dog {
  name = "xx";
  constructor() {
    getName();
  }
}

new String("abc");
var x = 123;
x = null;
// 메모리에서 존재하지 않게 하는것

// java 나 c 언어에서 문자열은 character Array 이것이 조인해서 나옴
// new String 생성자 함수 - 의 참조값을 하나 더 가짐 8byte 8byte = 16byte
// string 은 "Constant Pool" 해시 맵, 해시 테이블 - 키 밸류 구조 hash('abc') 96 + 97 + 98 abc | 8byte
console.log("----------------------------------");
const hong = { id: 1, name: "Hong" };
let kim = { id: Symbol(), name: "Kim" };
console.log(hong === kim);
kim = hong;
console.log(hong === kim);

// 비교는 스택끼리 함 == ===
// immutable =  자바스크립트의 stack
// 전역변수 global object => variable environment => stack => heap

const o1 = new Object();
const o2 = {};
console.log("o1 === o2", o1 == o2);
// 둘의 메모리주소가 다름

//객체 속에 있는 함수 메소드
//프로토타입 체인

const nStr = n.toString();
const nStr2 = new Number(n).toString();
// 암묵적 형변환
console.log("🚀 ~ nStr:", nStr, nStr2);
// 숫자 + 문자 = 문자
const nStr16 = parseInt(nStr, 16); //16진수
console.log("🚀 ~ nStr16:", nStr16);
// 생략하면 10진수
const d1 = Date(); // 문자로 만듬
const d2 = new Date(); // 객체로 만듬
console.log(d1 === d2);

console.log(d2.getTime());
//unix time
const sr = { ud: 1 };
console.log(`${sr}` + 1);

let a = 1;
const b = ((a.b = 5), console.log("xx>>", a.b));
console.log(a, b);

a = 1;
console.log("x", a.b, a.toString());
let i = 1;
console.log(i.a);
