/**
 * Человек.
 * @param {string} name
 */
function Person(name, [movie]) {
  this.name = name;
  this.watchedMovies = [];
  this.uniqueCatoon = [];
  this.watchMovie(movie);
}
Array.prototype.toString = function () {  // не понял как переопределить toString конкретной функции конструктора Person...
  let result = [];
  this.forEach((element, index) => {
    result.push(`${index + 1} ${element.title}`);
  });
  return result.join(", ");
};

Person.prototype.watchMovie = function (movie) {
  movie.play();
  if (this.watchedMovies.length === 0) {
    this.watchedMovies.push(movie);
  } else if (!this.uniqueCatoon.includes(movie.title)) {
    this.watchedMovies.push(movie);
  }
  this.uniqueCatoon.push(movie.title);
};

module.exports = { Person };
