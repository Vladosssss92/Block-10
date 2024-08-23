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
  beginning = "Long, long ago"
) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}

Cartoon.prototype.getDescription = function () {}; // нахрена этот объект вообще?)))

Cartoon.prototype.play = function () {
  return [this.studio, this.studioLogo, this.title, this.beginning];
};

/**
 * Мульт студии Walt Disney.
 */
function DisneyCartoon(
  title,
  year,
  forChildren,
  beginning = "Long, long ago in a faraway land..."
) {
  Cartoon.call(this, title, year, forChildren, beginning);
  this.studio = "Walt Disney";
  this.studioLogo = "🏰🌠";
}

DisneyCartoon.prototype = Object.create(Cartoon.prototype);
DisneyCartoon.prototype.constructor = DisneyCartoon;

/**
 * Мульт студии DreamWorks.
 */
function DreamWorksCartoon(
  title,
  year,
  forChildren,
  beginning = "Long, long ago in a faraway land..."
) {
  Cartoon.call(this, title, year, forChildren, beginning);
  this.studio = "DreamWorks";
  this.studioLogo = "🌙";
}

DreamWorksCartoon.prototype = Object.create(Cartoon.prototype);
DreamWorksCartoon.prototype.constructor = DreamWorksCartoon;

module.exports = { Cartoon, DisneyCartoon, DreamWorksCartoon };
