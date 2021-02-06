// Zadanie 1

class Person {
  constructor(imie, nazwisko, wiek, kraj, miasto) {
    Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
  }
  printInfo() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }
  addYear() {
    this.wiek++;
  }
}

const person1 = new Person('Roger', 'Federer', 38, 'Szwajcaria', 'Bazylea');
const person2 = new Person('Rafael', 'Nadal', 33, 'Hiszpania', 'Nanacor');

person1.printInfo();
person1.addYear();
person2.printInfo();
person2.addYear();

// zadanie 2

Person.prototype.favDishes = [];
Person.prototype.addFavDishes = function(danie) {this.favDishes.push(danie)};
Person.prototype.typeFavDishes = function() {console.log(this.favDishes.join(', '))};
var person3 = new Person("Andy", "Murray", 33, "UK", "Glasgow");
person3.addFavDishes("Fish and Chips");
person3.addFavDishes("English Breakfast");
person3.typeFavDishes();

// zadanie 3

function Kalkulator() {
    this.a;
    this.b;
    this.setA = (a) => this.a = a;
    this.setB = (b) => this.b = b;
    this.dodaj = () => this.a + this.b;
    this.odejmij = () => this.a - this.b;
    this.pomnoz = () => this.a * this.b;
    this.podziel = () => {
        if (this.b === 0) return "Division by 0!";
        return this.a / this.b;
    }
}
var calc = new Kalkulator();
calc.setA(123);
calc.setB(321);
console.log(calc.dodaj());
console.log(calc.odejmij());
console.log(calc.pomnoz());
console.log(calc.podziel());
calc.setB(0);
console.log(calc.podziel());

// zadanie 4

function LadderSim(max) {
    this.currentStep = 0;
    this.maxStep = max;
    this.up = () => this.currentStep < this.maxStep && this.currentStep++;
    this.down = () => this.currentStep > 0 && this.currentStep--;
    this.getOff = () => this.currentStep = 0;
}

var ladder = new LadderSim(10);
ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.uo();
ladder.down();
ladder.up();
console.log(`Jesteś na ${ladder.currentStep} szczebelu`);
ladder.getOff();
console.log(`teraz jest na ${ladder.currentStep} szczeblu`);
