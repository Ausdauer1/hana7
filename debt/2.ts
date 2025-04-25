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
  [p in keyof (T & U)]: p extends keyof T & keyof U ? T[p] | U[p] : (T & U)[p];
};

type ICombined = Combine<IUser, IDept>;
type CombineExclude<T, U, E extends string | number | symbol> = Omit<
  Combine<T, U>,
  E
>;
type ICombineExclude = CombineExclude<IUser, IDept, "name" | "dname">;

let combineExclude: ICombineExclude = {
  id: 0,
  age: 33,
  captain: "ccc",
};

// regist 함수가 다음과 같을 때 파라미터 처리를 해보세요.
function registUserObj({ name, age }: { name: string; age: number }) {
  const id = 100;
  return { id, name, age };
}

type RegistUserObj = Parameters<typeof registUserObj>;

const paramObj: RegistUserObj = { name: "Hong", age: 32 };
const newUser2 = registUserObj(paramObj);
console.log("🚀  newUser2:", newUser2);

function registUser(name: string, age: number) {
  const id = 100;
  return { id, name, age };
}

type RegistUser = Parameters<typeof registUser>;

const param: RegistUser = ["Hong", 32];
const newUser = registUser(...param);
console.log("🚀  newUser:", newUser);

export {};
