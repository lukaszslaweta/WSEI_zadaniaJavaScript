// Zadanie 1

const car = {
    color: 'black',
    doors: 4,
    wheels: 4,
    model: 'BMW i3',

};

console.log(car);

console.log(car.model);

// Zadanie 2

const car = {
    color: 'black',
    doors: 4,
    wheels: 4,
    model: 'BMW i3',
    changeModel: function (newModel) {
        this.model = newModel;
    }
}

car.changeModel('Tesla model 3');
console.log(car);

// zadanie 3

function SumObject(array) {
    this.tablica = array;
    this.sum = () => 
        this.sum = array.reduce((cur, val) => cur+val, 0);
    this.sum = null;
}
var test = new SumObject([1,2,3]);
test.sum();
console.log(test.sum);

// zadanie 4

var car = {
    name: 'BMW',
    age: '12',
    transmission: 'manual',
    backSignposts: false,
}
Object.keys(car).forEach(
    (prop) => console.log(prop + ': ' + car[prop])
);

// zadanie 5

console.log("BMW");
car.seat = {
    leather: true,
    heated: true,
    MPakiet: true,
}

Object.keys(car.seat).forEach(
    (prop) => console.log('car.seat.' + prop + ': ' + car.seat[prop])
);

// zadanie 6

const car = {
    color: 'black',
    doors: 4,
    wheels: 4,
    model: 'BMW i3',

};

car.engine = electric;
car.hello = () => console.log('Hello');
car.hello(); 
