// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Standard for loop answer, probably the one you want to  use in an interview.
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ""

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#"
//       } else {
//         stair += " "
//       }
//     }
//     console.log(stair)
//   }
// }

//Recursive Answer
const steps = (n, row = 0, stair = '') => {
  //Base case. Make sure you wont be looping forever
  if (n === row) {
    return;
  }

  //Check length of stair to determine if we need to run the function again
  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  //Add the appropriate character to stair
  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

  //Recursive function call
  steps(n, row, stair)
}


steps(4)

module.exports = steps;
