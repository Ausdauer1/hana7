console.log("-----------------------------");
console.log(typeof 123n);

const a = undefined;
const b = null;
if (undefined == null) console.log("true1");
if (0) console.log("true2");
console.log(typeof new Boolean());
console.log(typeof false);
console.log("-----------------------------");
const c = new Object();
c["name"] = "홍길동";
const d = {};
d["name"] = "홍길동";
console.log(typeof c);
console.log(typeof d);
console.log(typeof c === typeof d);

let obj = {
  key: function () {
    return "jar";
  },
  ["aa"]() {
    return "bar";
  },
  ["bb"]: 123,
  ["cc"]: () => {
    return "car";
  },
};

console.log(obj.key());
console.log(obj.key());
console.log(obj.aa());
console.log(obj.bb);
console.log(obj.cc());
