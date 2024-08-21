// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}
function Train(driver) {}

function Truck(driver) {
  this.loadCargo = function (cargo) {};
}

Truck.prototype.unloadCargo = function () {
  // Код тут.
};
Vehicle.prototype.drive = function (kmh) {
  return (this.speed = kmh);
};
Vehicle.prototype.stop = function () {
  return (this.speed = 0);
};
Train.prototype = Object.create(Vehicle.prototype);
Truck.prototype = Object.create(Vehicle.prototype);

// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
