let item2 = "tennis";
let sports = {
  [item2] : 1,
  [item2 + "Game" ] : "윔블던",
  [item2 + "Method"]() {
    return this[item2];
  }
};

console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisMethod);

sports.tennisMethod();
