function absoluteValuesSumMinimization(a) {
  // sort in-place
  a.forEach((num, index) => {
    if (num > a[index+1]) {
      let c = num;
      a[index] = a[index+1];
      a[index+1] = num
    }
  });

  // find median - if two options, take lower index
  let middleIndex;
  if (a.length % 2 === 0) {
    middleIndex = a.length/2-1;
  } else {
    middleIndex = Math.floor(a.length/2);
  }
  return a[middleIndex];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));


//HIS SOLUTION
// Issues: he doesn't sort the array, so it isn't a true median value
// const isEven = a.length % 2 === 0;
// return isEven ? a[a.length /2 -1] : a[Math.floor(a.length /2)];
