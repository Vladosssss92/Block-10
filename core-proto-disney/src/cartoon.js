/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
function Cartoon(
  title,
  year,
  forChildren = true,
  beginning = "Long, long ago..."
) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}

Cartoon.prototype.getDescription = function () {};

Cartoon.prototype.play = function () {};

/**
 * Мульт студии Walt Disney.
 */
function DisneyCartoon(title, year, forChildren, beginning) {
  Cartoon.call(this, title, year, forChildren, beginning);
  this.studio = "Walt Disney";
}

DisneyCartoon.prototype = Object.create(Cartoon);
DisneyCartoon.prototype.constructor = DisneyCartoon;

/**
 * Мульт студии DreamWorks.
 */
function DreamWorksCartoon(title, year, forChildren, beginning) {
  Cartoon.call(this, title, year, forChildren, beginning);
  this.studio = "DreamWorks";
}

DreamWorksCartoon.prototype = Object.create(Cartoon);
DreamWorksCartoon.prototype.constructor = DreamWorksCartoon;

// module.exports = { Cartoon, DisneyCartoon, DreamWorksCartoon };
