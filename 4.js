const target = {
  a: 1,
  b: 2,
  c: 3,
};

const handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.a); // 1
console.log(proxy.b); // 2
console.log(proxy.c); // 3
console.log(proxy.meaningOfLife); // 42
