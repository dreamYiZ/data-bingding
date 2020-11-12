var account = {
  blance: 5000,
};

var bank = new Proxy(account, {
  get: function (target, prop) {
    return 900000;
  },
});


console.log(account.blance)
console.log(bank.blance)
console.log(account.currency)