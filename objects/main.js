const o = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

class Car {
  static getNextVin() {
    Car.nextVin += 1;
    return Car.nextVin;
  }

  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.vin = Car.getNextVin();
    this.userGears = ['P', 'N', 'D', 'R'];
    const [firstGear] = this.userGears;
    this.userGear = firstGear;
  }

  static areSimilar(car1, car2) {
    return car1.make === car2.make && car1.model === car2.model;
  }

  static areSame(car1, car2) {
    return car1.vin === car2.vin;
  }

  shift(gear) {
    if (this.userGears.indexOf(gear) < 0) {
      throw new Error(`Invalid gear: ${gear}`);
    }
    this.userGear = gear;
  }
}

Car.nextVin = 0;

const car1 = new Car('Tesla', 'S');
const car2 = new Car('Mazda', '3');
car1.shift('N');

console.log(car1.vin, car2.vin);

class Vehicle {
  constructor() {
    this.passengers = [];
    console.log('Vechicle created.');
  }

  addPassenger(p) {
    this.passengers.push(p);
  }
}

class VehCar extends Vehicle {
  constructor() {
    super();
    console.log('Car created.');
  }
}

const v = new Vehicle();
v.addPassenger('Frank');
v.addPassenger('Bob');
console.log(v.passengers);

const c = new VehCar();
c.addPassenger('Alice');
