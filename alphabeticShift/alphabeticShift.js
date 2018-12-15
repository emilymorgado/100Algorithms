function alphabeticShift(inputString) {
  let outputString = [];
  inputString = inputString.split('');

  inputString.forEach(letter => {
    let code = letter.charCodeAt()
    if (code === 122) {
      outputString.push(String.fromCharCode(97));
    } else {
      outputString.push(String.fromCharCode(code+1));
    }
  });
  return outputString.join('');
}

console.log(alphabeticShift('crazy'));  //"dsbaz"
