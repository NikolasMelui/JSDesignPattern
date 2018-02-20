export default class Singleton {
  static instance;

  constructor() {
    if (instance) {
      return instance;
    }

    this.instance = this;
  }
}

const s1 = new Singleton();
const s2 = new newSingleton();
console.log(s1 === s2);

//Yes? Or No? Think about it!
