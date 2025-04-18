class Animal {
  static ID = 1;
  constructor(name) {
    this.name = name;
  }

  feed(nutrient) {
    console.log(`feetd to ${this.name} : `, nutrient);
  }
}

const petMixin = {
  likePeople() {
    console.log(`${this.name} likes people`);
  },
};

class Dog extends Animal {
  //private
  #age = 0;
  constructor(name, age) {
    super(name);
    // this.name = name
    this.#age = age;
  }

  setName(newName) {
    this.name = newName;
  }

  getAge() {
    return this.#age;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  f() {
    return this.ID;
  }
  static sf() {
    return this.ID;
  }
}
const ani = new Animal();
const aid = ani.ID;
console.log("🚀 aid:", aid);

const dog = new Dog("Dog", 33);
console.log("🚀 dog:", dog, dog.f(), Dog.sf());
console.log("🚀 dog:", dog, dog.name, dog.getAge());
// dog.setName('Maxx')
dog.setName("Maxx");
dog.name = "Maxx";
dog.age = 9;
console.log("🚀 name:", dog.name, dog.age);
dog.feed("VC");
Object.assign(Dog.prototype, petMixin);
dog.likePeople();

const marry = new Dog("Marry");
marry.likePeople();

return;
function wrapFullname(user) {
  return new Proxy(user, {
    get(target, prop) {
      // log(target, prop, loginEmp)
      if (prop === "fullname") {
        return `${target.firstName} ${target.lastName}`;
      } else {
        return target[prop];
      }
    },

    set(target, prop, value) {
      if (prop === "fullname") {
        [target.firstName, target.lastName] = value.split(" ");
      } else {
        target[prop] = value;
      }
      return target;
    },
  });
}

const hong = {
  id: 1,
  firstName: "Kildong",
  lastName: "Hong",
  get fullname() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullname(fname) {
    const names = fname.split(" ");
    [this.firstName, this.lastName] = names;
    // this.firstName = names[0];
    // this.firstName = names[1];
  },
};

// console.log("🚀 fullname11:", fullname);

hong.fullname = "Jhon Hong";
const fullname = hong.fullname;
console.log("🚀 fullname22:", fullname);

const kim = wrapFullname({ id: 2, firstName: "Kildong", lastName: "Kim" });
kim.id = 5;
kim.fullname = "Jhon kim";
console.log("🚀 kim:", kim.fullname);

// AOP
