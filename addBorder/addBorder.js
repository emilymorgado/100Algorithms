function addBorder(picture) {
  const len = picture[0].length + 2;

  let count = 0;
  let border = '';
  while (count < len) {
    border += '*';
    count ++;
  }
  border;

  picture.forEach((str, ind) => {
    picture[ind] = `*${str}*`
  });

  picture.push(border);
  picture.unshift(border);

  return picture;
}
// console.log(addBorder(["abc", "ded"]));
