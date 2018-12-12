function allLongestStrings(inputArray) {
  let longWords = [];
  let len = 0;
  inputArray.forEach(word => {
    if (word.length > len) {
      len = word.length
      longWords = [word];
    } else if (word.length === len) {
      longWords.push(word);
    }
  });
  return longWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcdt", "aba"]));
