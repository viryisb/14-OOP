'use strict';

/* const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //this.calcAge = function () {
   // console.log(2037 - this.birthYear);
  //}; 
};
 
const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1 New {} is createsd
//2 function is called, this ={}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
//.prototypeOfLinkedObjects should be a better name

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

//ownProperties are properties declared inside the Object

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false

//Object.prototype (top of prototype chain)
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor); */

const arr = [3, 6, 4, 5, 8, 7, 9];
//new Array=== []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1, car2);

Car.prototype.accelerate = function () {
  console.log(this.speed * 10);
};

Car.prototype.brake = function () {
  console.log(this.speed - 5);
};

car1.accelerate();
car2.accelerate();
car1.brake();
car2.accelerate();
car2.brake(); */

//class expresion
/* const PersonCl=class{

 } */
//class delcaration
/* class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //instance methods
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);


jessica.greet();

//Classes are not Hoisted
//Class are first class citizens (pass them into functions and return from functions)
//Classes are executed in strict mode even if we do not activate it

const walter = new PersonCl('Walter White', 1965); */

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/* class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(this.speed * 10);
  }

  brake() {
    console.log(this.speed - 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return (this.speed = speed * 1.6);
  }
}
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car2.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford); */

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototypes

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h  with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log('tesla', tesla);
tesla.brake();
tesla.accelerate();
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

/* Se define una clase "PersonCl" con un constructor que recibe dos parámetros: "fullName" y "birthYear". Dentro del constructor, se asignan estos valores a los atributos del objeto mediante el uso de la palabra clave "this".

Se definen varios métodos de instancia dentro de la clase "PersonCl":

"calcAge()" que imprime en la consola la edad calculada utilizando el año de nacimiento
"greet()" que imprime en la consola un saludo utilizando el nombre completo
"age" que tiene un getter que calcula y retorna la edad
"fullName" que tiene un setter que valida que el nombre ingresado sea un nombre completo y un getter que retorna el nombre completo
Se define un método estático "hey()" dentro de la clase "PersonCl" que imprime en la consola "Hey there 👋" */

//class delcaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //instance methods
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

/* Se define una clase "StudentCl" que hereda de la clase "PersonCl" mediante la palabra clave "extends". Esta clase tiene un constructor que recibe tres parámetros: "fullName", "birthYear" y "course". Dentro del constructor, se utiliza la palabra clave "super" para llamar al constructor de la clase padre y pasarle los mismos parámetros. También se asigna el valor de "course" a un atributo de la clase.

Se definen varios métodos de instancia dentro de la clase "StudentCl":

"introduce()" que imprime en la consola el nombre completo y el curso que estudia
"calcAge()" que sobreescribe el método del mismo nombre de la clase padre y añade una frase adicional a la impresión en consola */
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I´m ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}
/* Se crea una instancia de la clase "StudentCl" llamada "martha". Para crear una nueva instancia de una clase, se utiliza el operador "new" seguido del nombre de la clase y los parámetros necesarios para el constructor. En este caso, se está pasando los valores "Martha Jones", 2012 y "Computer Science" como parámetros para el constructor de la clase "StudentCl".

Una vez creada la instancia de la clase "StudentCl" en la variable "martha", se pueden llamar a los métodos de la clase. En este caso, se está llamando a los métodos "introduce()" y "calcAge()" de la instancia "martha".

Los métodos "calcAge()" e "introduce()" se encuentran en las clases "PersonCl" y "StudentCl" respectivamente. */
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
