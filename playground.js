var isValid = function (string) {
  let paranthesesHashmap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let index = 0; index < string.length; index++) {
    if (paranthesesHashmap[string[index]] != string[index + 1]) {
        return false;
    } else {
        index++;
    }
  }
  return true;
};

console.log(isValid("()[]{}"));
