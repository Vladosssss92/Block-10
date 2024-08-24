/**
 * Человек.
 * @param {string} name
 */
function Person(name, [movie]) {
  this.name = name;
  this.watchedMovies = [];
  this.watchedMovies.__proto__.toString = function () {
    this.forEach((element, index) => {
      return `${index + 1} ${element.title}`;
    });
  };
  this.mult = [];
  this.watchMovie(movie);
}

Person.prototype.watchMovie = function (movie) {
  // movie.play();
  if (this.watchedMovies.length === 0) {
    this.watchedMovies.push(movie);
  } else if (!this.mult.includes(movie.title)) {
    this.watchedMovies.push(movie);
  }
  this.mult.push(movie.title);
};

// let zzz = {
//   beginning: "Long, long ago in a faraway land...",
//   forChildren: true,
//   studio: "Walt Disney",
//   studioLogo: "🏰🌠",
//   title: "Rapunzel",
//   year: 0,
// };
let emm = new Person("emma", [{ title: "rap", sex: "34", xxx: "wer" }]);
console.log(emm);
console.log(emm.watchedMovies);
console.log(emm.mult);
emm.watchMovie({ title: "rrr" });
console.log(emm.mult);
emm.watchMovie({ title: "rrr", sss: 123 });
console.log(emm.mult);
console.log(emm.mult.includes("rap"));
console.log(emm.watchedMovies);

console.log(emm.watchedMovies.toString());
console.log(emm.watchedMovies.__proto__ === Array.prototype);
console.log(Array.prototype);
module.exports = { Person };
