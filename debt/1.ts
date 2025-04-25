// let gilding: false | string
let gildong = Math.random() > 0.5 && "HongGilDong";

if (gildong) {
  gildong.toUpperCase(); // string
} else {
  gildong; // false | string
}

type TUser = { id: number; name: string };
const kim = { id: 2, name: "Kim", addr: "Pusan" };
const y1: TUser[] = [{ id: 1, name: "hong", addr: "Seoul" }, kim];

interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Combine<T, U> = {
  [x in keyof (T & U)]: x extends keyof T & keyof U
    ? T[x] | U[x]
    : x extends keyof T
    ? T[x]
    : x extends keyof U
    ? U[x]
    : never;
};

type Combin2<T, U = unknown> = {
  [k in keyof (T & U)]: k extends keyof T & keyof U ? T[k] | U[k] : (T & U)[k];
};

type ICombined = Combine<IUser, IDept>;

type ArrayItems<T, Item = unknown> = T extends (infer Item)[] // T extends unknown[] ? T[number] : T // '참'이라면 Item이라는 Generic Type을 선언(생성)
  ? Item
  : T; // '거짓'일 때는 정확히 추론할 수 없으므로 사용하면 안됨!

type StringItem = ArrayItems<string>; // string
type StringArrayItem = ArrayItems<string[]>; // string
type NumberArrayItem = ArrayItems<number[]>; // number
type BooleanArrayItem = ArrayItems<boolean[]>; // boolean
type StringArrayItem2 = ArrayItems<Array<string>>; // string[] ⇒ string
type String2DItem = ArrayItems<string[][]>; // string[]

type Excludex<T, U> = T extends U ? never : T;
type Ee = Excludex<string | number, string>;
type Ex = Excludex<string | number | boolean, string | boolean>;

function add(a: number, b: string, c: boolean) {
  return `${a} - ${b} + ${c}`;
}

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
type C = Args<typeof add>; // number | string | boolean

type FirstArgs<F> = F extends (a: infer First, ...rest: any) => any
  ? First
  : never;
type SecondArgs<F> = F extends (a: any, b: infer Second, ...rest: any) => any
  ? Second
  : never;
type Args<F> = F extends (...args: infer P) => any ? P[number] : never;

let a: A = 0;
let b: B = "abc";
let c: C = Math.random() > 0.5 ? 1 : "abc";
console.log("🚀 abc:", a, b, c);

type AX = Args<typeof String.prototype.endsWith>;
// ⇒ string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>;

// export {}
