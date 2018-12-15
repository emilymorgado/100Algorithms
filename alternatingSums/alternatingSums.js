function alternatingSums(a) {
  let evenIndexTeam = 0;
  let oddIndexTeam = 0;

  a.forEach((player, index) => {
    if(index % 2 === 0) {
      evenIndexTeam += player;
    } else {
      oddIndexTeam += player;
    }
  });
  return [oddIndexTeam, evenIndexTeam];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
