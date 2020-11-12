// internal state for #inputname field
const myUser = {
    id: 'inputname',
    name: ''
  };
  
// proxy handler
const inputHandler = {
  set: function (target, prop, newValue) {
    if (prop == "name" && target.id) {
      // update object property
      target[prop] = newValue;

      // update input field value
      document.getElementById(target.id).value = newValue;
      return true;
    } else return false;
  },
};

// create proxy
const myUserProxy = new Proxy(myUser, inputHandler);

// set a new name
myUserProxy.name = "Craig";
console.log(myUserProxy.name); // Craig
console.log(document.getElementById("inputname").value); // Craig
