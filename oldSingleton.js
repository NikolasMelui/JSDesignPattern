const oldSingleton = (() => {
  let instance;

  function oldSingleton() {
    return !instance ? (instance = this) : instance;
  }

  return oldSingleton;
})();

const s1 = new oldSingleton();
const s2 = new oldSingleton();
console.log(s1 === s2);
