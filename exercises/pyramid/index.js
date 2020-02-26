// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2)

//   for (let row = 0; row < n; row++) {
//     let level = ""

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#"
//       } else {
//         level += " "
//       }
//     }
//     console.log(level)
//   }
// }

//Recursive solution
const pyramid = (n, row = 0, level = "") => {
  const midpoint = Math.floor((2 * n - 1) / 2)

  //Base case. Make sure you wont be looping forever
  if (n === row) {
    return;
  }

  //Check length of level to determine if we need to run the function again
  if ((2 * n - 1) === level.length) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  //Add the appropriate character to level
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += '#'
  } else {
    level += ' '
  }

  //Recursive function call
  pyramid(n, row, level)
}

pyramid(2)



module.exports = pyramid;
