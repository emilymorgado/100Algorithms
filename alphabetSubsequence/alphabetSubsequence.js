function alphabetSubsequence(s) {
  let codes = [];
  let flag = true;
  s = s.split('');

  s.forEach(letter => {
    let code = letter.charCodeAt();
    codes.push(code);
  });

  // He included a Set, to fail fast on redundancies, which is nice
  if (new Set(codes).size !== codes.length) {
    return false;
  }

  codes.forEach((num, ind) => {
    if (codes[ind+1] && num >= codes[ind+1]) {
      flag = false;
    }
  });
  return flag;
}

console.log(alphabetSubsequence('zab')) //false
console.log(alphabetSubsequence('effg')) //false
console.log(alphabetSubsequence('cdce')) //false
console.log(alphabetSubsequence('ace'))  //true
console.log(alphabetSubsequence('bxz')) //true
