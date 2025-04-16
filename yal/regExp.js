const assert = require("assert");

const str = "Senior Coding Learning JS";
const a = /[A-z\d]/.test(str); // ?
console.log("🚀 a:", a);
const b = /(A-z\d)/.test(str); // ?
console.log("🚀 b:", b);
const c = /(A-z\d)/.test("XA-z2"); // ?
console.log("🚀 c:", c);
const d = /(A-z\d)/.test("XAz2"); // ?
console.log("🚀 d:", d);

const r1 = str.replace(/[A-Z]/g, "*");
console.log("🚀 r1:", r1);

const regexp = /senior|coding/gi;
if (regexp.test("Junior Developer")) console.log("OK1");
if (regexp.test("Senior Developer")) console.log("OK2");
if (regexp.test("JS Coding")) console.log("OK3");
if (regexp.test("JavaScript Coding")) console.log("OK4");

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

function fmt(txts, value) {
  // console.log(txts, value);
  return `${txts[0]}${value.toLocaleString().padStart(8)}${txts[1]}`;
}

// ex1
const upperToLower = (str) =>
  str.replace(/[A-Z]/g, (foundStr) => foundStr.toLowerCase());
const low = upperToLower("Senior Coding Learning JS");
console.log("🚀 low:", low);

const swapCase = (str) =>
  str.replace(/[A-z]/g, (foundStr) => {
    if (foundStr.match(/[A-Z]/)) return foundStr.toLowerCase();
    else return foundStr.toUpperCase();
  });

console.log(swapCase("Senior Coding Learning JS"));
assert.equal(
  swapCase("Senior Coding Learning JS"),
  "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 7 Class"), "hANARO 7 cLASS");

// ex2
const telfmt = (str) => {
  if (str.length === 12) return str.replace(/(\d{4})(\d{4})/, "$1-$2-");
  if (str.length === 11) return str.replace(/(\d{3})(\d{4})/, "$1-$2-");
  if (str.length === 10) return str.replace(/(0\d0 | 0\d)(\d{3,4})/, "$1-$2-");
};
console.log(telfmt("050712345678"));
console.log(telfmt("01012345678"));
console.log(telfmt("07012341234"));
console.log(telfmt("0212345678"));
console.log(telfmt("0101234567"));
return;
// 12개 11개, 10개, 10개,
assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");
