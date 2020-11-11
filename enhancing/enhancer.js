module.exports = {
  success,
  fail,
  repair,
  get,
};

// accepts an item object and returns a new item object modified according to the rules defined by the client
function success(item) {
  let { enhancement } = item;

  if (enhancement < 20) {
    enhancement += 1;
  }
  return { ...item, enhancement };
}

function fail(item) {
  return { ...item };
}

// accepts an item object and returns a new item with the durability restored to 100.
function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
