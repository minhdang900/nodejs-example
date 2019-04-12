const car = {
  maker: 'Mercedes-Benz',
  model: 'C-Class',
  drive: () => {
    console.log(`Driving a ${this.maker} ${this.model} car!`);
  },
};
car.drive();

const car1 = {
  maker: 'Ford',
  model: 'Fiesta',
  drive() {
    console.log(`Driving a ${this.maker} ${this.model} car!`);
  },
};
car1.drive();

const anotherCar = {
  maker: 'Audi',
  model: 'A4',
};
car1.drive.bind(anotherCar)();
