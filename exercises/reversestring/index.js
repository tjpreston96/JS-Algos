// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  reversed = str.split("").reverse().join("");
  return reversed;
}

console.log(reverse(`paul`))

module.exports = reverse;
