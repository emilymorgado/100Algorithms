function add(param1, param2) {
  if (!param1 || !param2) {
    return 'Error: Requires two parameters to run';
  }
  return param1 + param2;
}
// console.log(add(1, 2));
// console.log(add(3, 2));


function add2(...param1) {
  let total = 0;
  param1.forEach(num => {
    total += num;
  });
  return total;
}
// console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
