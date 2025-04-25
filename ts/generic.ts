import { jadex } from "jade";
import data from "./data.json";

console.log(data);
function makeTuple<First, Second>(first: First, second: Second) {
  return [first, second] as const;
}
const x = jadex;

console.log(x);
const [emp, dept] = makeTuple(
  {
    id: 1,
    name: "hong",
  },
  {
    id: 3,
    dname: "development",
  }
);

const constCart = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type T3 = 1 | 2 | 3;
type ConstCart = typeof constCart;
type T4 = ConstCart[keyof ConstCart];

const xCart = { x: 1, y: "str" } as const;
type XCart = typeof xCart;
type T5 = XCart[keyof XCart];

type ValueOf<T> = T[keyof T];
type T44 = ValueOf<typeof constCart>;
type T55 = ValueOf<typeof xCart>;

console.log("--------------------------------");

class Factory<T> {
  protected products: T[];

  constructor(product: T) {
    this.products = [product];
  }

  create(product: T) {
    this.products.push(product);
  }
  getProducts() {
    return [...this.products];
  }
}

const factory = new Factory({ name: "KIA", description: "car factory" });
const products = factory.getProducts();
//
//
//
type Syrup =
  | { syrup: "choco"; price: 500 }
  | { syrup: "strawberry"; price: 800 };
type Topping = "java" | "cherry";
type Coffee = { menu: string; price: number };

class CoffeeFactory extends Factory<Coffee> {
  order<T>(menu: string, topping: T[]) {
    const coffee = this.products.find(({ menu: _coffee }) => _coffee === menu);

    return coffee ? { ...coffee, additives: topping } : null;
  }
}
//

const coffeeFactory = new CoffeeFactory({
  menu: "americano",
  price: 2000,
});

const myCoffee = coffeeFactory.order<Syrup | Topping>("americano", [
  { syrup: "choco", price: 500 },
  "java",
  "cherry",
]);

const myAdditionalPrice = myCoffee?.additives.reduce(
  (sum, item) => (sum += typeof item === "string" ? 0 : item.price),
  0
); // OK? Error?

const yourCoffee = coffeeFactory.order<Syrup>("americano", [
  { syrup: "choco", price: 500 },
  { syrup: "strawberry", price: 800 },
]);
const yourAdditionalPrice = yourCoffee?.additives.reduce(
  (s, c) => (s += c.price),
  0
); // OK? Error? OK!

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

type Except<T, U> = T extends U ? never : T; // never는 씹힌다!(같으면 제외)
type Ex0 = Except<IUser, IDept>; // IUser
type Ex1 = Except<keyof IUser, keyof IDept>; // name
type Ex2 = Except<keyof IDept, keyof IUser>; // dname | captain

type xx = (string | number) & (string | boolean);
//교집합
type xo = IUser & IDept;
type xo2 = { id: number } & { id: number; name: string };
const Xo2: xo2 = { id: 1, name: "dd" };
// 객체간의 인터섹션은 확장

// type P<T> = Pick<T, "id" | "age">;
// type Pdept = P<IDept>; // ?

const UserState = {
  준비: 1,
  진행중: 2,
  done: 3,
  cancel: 8,
  withdraw: 9,
  etc: 0,
} as const;

type valueoop<t> = t[keyof t];
type Ustate = typeof UserState;

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

type Change<T, K extends keyof T, U> = Omit<T, K> & { [P in K]: U };

type Change2<T, K extends keyof T, U> = {
  [k in keyof T]: k extends K ? U : T[k];
};

const change1: Change<IDept, "captain", IUser> = {
  id: 12,
  age: "df",
  dname: "2123",
  captain: { id: 1, name: "Hong", age: 33 },
};
type DeptCaptain = Change<IDept, "captain", IUser>;
// type Err = Change<IDept, "xxx", IUser>; // 존재하지 않는 키는 Error!!!

// cf. Pick  (<=> Intersect)
type P<T, K extends keyof T> = Pick<T, K>;
type Pdept = P<IDept, "id" | "age">;

console.log("--------------------------------------------------");

type Item = { item: string; price: number };
type ItemPrice<T extends { item: any; price: any }, U> = {
  item: keyof U;
  price: T["price"];
};

type ItemPriceA<T, U> = {
  [k in keyof T]: k extends "item" ? keyof U : T[k];
};

const stock = { X: 1, Y: 2, Z: 30 };
console.log(typeof stock);

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: "X", price: 1000 },
  { item: "Y", price: 2000 },
  { item: "Z", price: 3000 },
  // { item: "P", price: 4000 },
];

const total = itemPrices.reduce(
  (curr, itemPrice) => curr + stock[itemPrice.item] * itemPrice.price,
  0
);

export {};

// 1. 30초 이하 간격으로 연속 8회 글을 업로드하면 어뷰져
// 30초 이내 의도적으로 30초 이상
// 의도적인 텀을 가진다

// - 단위시간동안 하는 방법

// 2. 티켓팅 웹사이트를 만드려고 한다.
// a 필요한 api의 종류를 생각해보세요
// b 해당 api가 사용되는 경우를 만해주세요
// c 해당 api가 필요한 이유를 말해주세요

// 3. 캐시 데이터의 저장과 조회
// 치킨집을 오픈하려한다. 다음과 같은 정보가 주어졌을 때 대규모 트래픽을 대비하기 위해서 어떤 데이터를 캐싱할 것인지 그리고 이유를 설명해주세요
//   1. 매장정보
//   2. 메뉴 정보
//   3. 사용자 정ㅇ보
//   4. 주문 내역
//   5. 고객 문의

// 4. 키워드 알림 시스템 설계
// 관심있는 키워드를 등록하고, 해당 키워드의 새로운 상품이 등록되면 유저에ㅔ게 알림을 주는
