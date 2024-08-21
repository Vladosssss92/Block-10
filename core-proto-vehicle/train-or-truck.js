// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}
function Train(driver) {
  Vehicle.call(this, driver);
}

function Truck(driver) {
  Vehicle.call(this, driver);
  this.cargo = [];
  this.loadCargo = function (cargo) {
    this.cargo.push(cargo);
    return this.cargo;
  };
  this.unloadCargo = function () {
    return this.cargo.pop(this.cargo[this.cargo.length]);
  };
}

Vehicle.prototype.drive = function (kmh) {
  return `${this.driver} driving at ${(this.speed = kmh)} kilometers per hour`;
};
Vehicle.prototype.stop = function () {
  this.speed = 0;
  return `${this.driver} has stopped`;
};
Train.prototype = Object.create(Vehicle.prototype);
Train.prototype.constructor = Train;
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

module.exports = { Vehicle, Train, Truck };
