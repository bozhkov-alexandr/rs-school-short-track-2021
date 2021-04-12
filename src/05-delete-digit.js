/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString().split('');

  for (let i = 0; i < 10; i++) {
    const pos = num.indexOf(`${i}`);

    if (pos > -1) {
      num.splice(pos, 1);
      break;
    }
  }

  return +num.join('');
}

module.exports = deleteDigit;
