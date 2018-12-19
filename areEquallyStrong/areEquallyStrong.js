function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let myStrength = yourLeft + yourRight;
  let friendStrength = friendsLeft + friendsRight;

  if (myStrength === friendStrength) {
    return true;
  } else {
    return false;
  }
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
