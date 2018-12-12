function adjacentElementsProduct(inputArray) {
  let biggest = inputArray[0] * inputArray[1];

  inputArray.forEach((num, ind) => {
    if ((num * inputArray[ind+1]) > biggest) {
      biggest = num * inputArray[ind+1];
    }
  });
  return biggest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-1, -5, 20, 2, -80, -10]));
