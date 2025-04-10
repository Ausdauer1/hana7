globalThis.name = "GlobalName";
// 브라우저는 이걸로 실행됨.
this.name = "moduleName";
// 노드는 이걸로 실행됨. 노드는 모듈로 실행되기 때문

function f() {
  console.log("f.this=", this.name);
}
f();

const af = () => console.log("af=this", this.name);
af();

// cf. Object Method
const obj = {
  name: "ObjName",
  bark() {
    // good!(호출한 객체)
    console.log("bark=", this.name);
  },
  bark2: () =>
    // bad!! (this=전역/module)
    console.log("bark2=", this.name),
};

obj.bark();
obj.bark2();



const expressFn = function(name) {
  // if, 'use strict' ?
  'use strict'
  if (this?.name) this.name = name;
  console.log(new.target, this?.name, name);
}


const arrowFn = (name) => {
  this.name = name;
  console.log(this, new.target, this.name, name);
}

// expressFn('expfn')
expressFn.bind({})('expfn');
// arrowFn('afn');

class Dog {
  constructor(nm) {
    console.log("🚀 nm:", nm)
  }
}

const maxx = new Dog('Maxx')

const dfn = new expressFn('D');
// const afn = new arrowFn('A'); // error!