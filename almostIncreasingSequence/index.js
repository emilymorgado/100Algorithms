// Catches third case and returns early
function almostIncreasingSequence(sequence) {
  let removals = 0;
  let newSequence = [];

  function findRemovals = {
    for (let i of sequence) {
      if (sequence[i+1] && sequence[i] > sequence[i+1]) {
        removals++;
        if (removals > 1) {
          return false;
        } else {
          findRemovals(newSequence);
        }
      }
      else {
        newSequence.push(sequence[i])
      }
    }
    return true;
  }

//First Solution (doesn't catch third case)
//   sequence.forEach((num, index) => {
//     if (sequence[index+1] && num > sequence[index+1]) {
//       if (possible === true) {
//         possible = 1
//       } else if (possible === 1 || possible === false) {
//         possible = false;
//       }
//     }
//   });
//   return possible ? true : false;
// }

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))
console.log(almostIncreasingSequence([1, 2, 3, 1, 2, 3]))
