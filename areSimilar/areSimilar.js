function areSimilar(a, b) {
  if (a.toString() === b.toString()) {
    return true;
  }

  let diff = 0;
  let diffs = [];
  a.forEach((num, index) => {
    if (num !== b[index]) {
      diff++;
      diffs.push(index);
    }
  });

  if (diff === 2) {
    let x = a[diffs[0]];
    a[diffs[0]] = a[diffs[1]];
    a[diffs[1]] = x;

    a.forEach((num, index) => {
      if (num !== b[index]) {
        return false;
      }
    });
    return true;
  } else {
    return false;
  }
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])); //true
console.log(areSimilar([1, 2, 3], [2, 1, 3])); //true
console.log(areSimilar([1, 2, 2], [2, 1, 1])); //false
console.log(areSimilar([1, 2, 3], [2, 2, 3])); //false
