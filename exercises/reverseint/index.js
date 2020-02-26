// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let newN = Math.abs(n).toString().split("").reverse().join("")
  return parseInt(newN) * Math.sign(n)
}

module.exports = reverseInt;


reverseInt(-15)
reverseInt(981)
reverseInt(500)