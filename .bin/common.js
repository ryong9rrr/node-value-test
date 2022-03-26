function should(compare, expected) {
  return console.log(compare === expected);
}

function describe(title, callback) {
  console.log(title);
  callback();
}

module.exports = { describe, should };
