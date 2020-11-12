module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let { enhancement } = item;

  if (enhancement < 20) {
    enhancement += 1;
  }
  return { ...item, enhancement };
}

function fail(item) {
  let { enhancement, durability } = item;
  if (enhancement < 15) {
    durability -= 5;
  } else {
    durability -= 10;
    if (enhancement > 16) {
      enhancement -= 1;
    }
  }

  return { ...item, enhancement, durability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  let { name, enhancement } = item;

  if (enhancement) {
    name = `[+${enhancement}] ${name}`;
  }

  return { ...item, name };
}
