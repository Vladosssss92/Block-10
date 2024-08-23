// // Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// // Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}
function Train(driver) {
  Vehicle.call(this, driver); // и есть вопросы к контексту.......
}
function Truck(driver) {
  Vehicle.call(this, driver);
  this.cargo = [];
}
// ВОПРОС!!!!!!!!!!

Train.prototype = Object.create(Vehicle.prototype); // мы создаем прототип Vehicle в прототипе Train,
// но это не новый объект а ссылка на Vehicle.prototype???
// и получется мы берем и заменяем полностью прототип Train на прототип Vehicle???

Train.prototype.constructor = Train; // как понять что мы добавляем текущую функцию
// в контруктор прототипа самой же функции???

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Vehicle.prototype.drive = function (kmh) {
  return `${this.driver} driving at ${(this.speed = kmh)} kilometers per hour`;
};

Vehicle.prototype.stop = function () {
  this.speed = 0;
  return `${this.driver} has stopped`;
};

Truck.prototype.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this.cargo;
};
Truck.prototype.unloadCargo = function () {
  return this.cargo.pop();
};

module.exports = { Vehicle, Train, Truck };
