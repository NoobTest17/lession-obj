const myFavoriteFilm = {
  name: "Пила 1",
  producer: "Джеймс Ван",
  date: "19 января 2004 года.",
  country: "USE",
};

myFavoriteFilm.money = "$18 млн";
myFavoriteFilm.getName = function () {
  console.log(this.name);
};

delete myFavoriteFilm.date;

console.log(myFavoriteFilm);

myFavoriteFilm.getName();

function getRandominRande(min, max) {
  let rnd = Math.random(); // 0 - 1

  return rnd * 10; // 0 - 100 
}
console.log(getRandominRande(3, 9));