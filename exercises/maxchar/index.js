// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {}; // <-- character map object
  let max = 0; // <-- variable used to find most common
  let maxChar = ""; // <-- end result

  //   character map
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //   iterate charMap to find most frequently used value
  //   'for in' syntax (ES2015) because charMap is an object
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  //!     Don't forget return
  return maxChar;
}

module.exports = maxChar;
