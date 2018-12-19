function arrayChange(inputArray) {
  let moves = 0;
  let lastNum;

  inputArray.forEach((num, ind) => {
    if (inputArray[ind+1]) {
      if (!lastNum) {
        lastNum = num;
      }
      num2 = inputArray[ind+1];
      while (lastNum !== num2-1) {
        num2++;
        moves++;
      }
      lastNum = num2;
    }
  });
  return moves;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 2, 1]));
