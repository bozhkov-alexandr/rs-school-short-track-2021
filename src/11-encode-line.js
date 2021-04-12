/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letter = str[0];
  let newStr = '';
  let counter = 1;
  let prefix = '';
  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== letter || str[i] === null) {
      letter = str[i];
      if (counter === 1) {
        prefix = '';
      } else {
        prefix = counter;
      }
      newStr += prefix + str[i - 1];
      counter = 1;
    } else {
      counter++;
    }
  }
  return newStr;
}

module.exports = encodeLine;
