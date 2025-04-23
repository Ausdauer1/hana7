import assert from "assert";

const isStringNumber = (value: unknown): value is [string, number] =>
  typeof value === "string";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
class Retriever implements Dog {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

function isDog(a: Animal): a is Dog {
  return a instanceof Retriever;
}

// 문제1) 다음에서 T1과 동일한 타입으로 T2를 정의하시오.

const cart = {
  X: 1,
  Y: 2,
  Z: 3,
};

type T1 = "X" | "Y" | "Z";
type T2 = keyof typeof cart;

// 문제2) 다음에서 T3과 동일한 타입으로 T4를 정의하시오.

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type T4 = (typeof constCart)[keyof typeof constCart];

function test() {
  try {
    // throw new Error("some error!!!!"); // 가
    // throw "some string error!!!"; // 나
    throw ["some", "array", "error"]; // 다
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    // console.log((error as Error).message); // (라)
  }
}
// test();

type TPropertyKeyType = string | number | symbol;
type TUser = { [key: string]: string | number };

function deleteArray(
  arr: TUser[] | number[],
  startOrKey: TPropertyKeyType,
  endOrValue?: unknown
) {
  if (typeof startOrKey === "number") {
    if (typeof endOrValue === "number") {
      return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
    }
    return arr.slice(0, startOrKey);
  }

  if (typeof startOrKey === "string") {
    return arr.filter((e) => {
      if (e && typeof e === "object") {
        // e['id'];  error
        if (e[startOrKey] != endOrValue) return true;
      }
    });
  }

  if (typeof startOrKey === "symbol") {
  }

  return [];
}

const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

console.log(deleteArray(users, 2)); // [Hong, Kim]
console.log(deleteArray(users, 1, 2)); // [Hong, Lee]
console.log(deleteArray(users, "id", 2)); // [Hong, Lee]
console.log(deleteArray(users, "name", "Lee")); // [Hong, Kim]

export {};
