var account = {
  blance: 5000,
};

var bank = new Proxy(account, {
  set: function (target, prop, value) {
    return Reflect.set(target, prop, 0);
  },
});

account.blance = 10000;
console.log(account.blance);
bank.blance = 0;
console.log(account.currency);
