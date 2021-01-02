function binding(tar, el, val) {
  Object.defineProperty(tar, val, {
    get: function () {
      return tar.val;
    },
    set: function (v) {
      el.textContent = v;
    },
  });
}

tar = {};
el = document.getElementById("text");

binding(tar, el, "foo");
