//zadanie 1

function Person(imie, nazwisko, wiek, kraj, miasto, jezyk) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.jezyk = jezyk;
    this.zmienWiek = (nowyWiek) => this.wiek = nowyWiek;
    this.zmienMiasto = (noweMiasto) => this.miasto = noweMiasto;
}

var osoba1 = new Person(
    'Jacek',
    'Mazur',
    30,
    'Polska',
    'Warszawa',
    'Polski'
), osoba2 = new Person(
    'Jekatierina',
    'Aleksandrowa',
    25,
    'Rosja',
    'Czelabińsk',
    'Rosyjski'
), osoba3 = new Person(
    'Fiona',
    'Ferro',
    23,
    'Belgia',
    'Libramont-Chevigny',
    'Niemiecki'
), osoba4 = new Person(
    'Iga',
    'Świątek',
    29,
    'Polska',
    'Warszawa',
    'Polski'
), osoba5 = new Person(
    'Serena',
    'Williams',
    38,
    'USA',
    'Saginaw',
    'Angielski'
);

// wypisanie 
console.log(osoba3);
// wypisanie parametru 
console.log(osoba1.nazwisko + ' ' + osoba1.imie + '. Pochodzi z ' + osoba1.miasto + ', ' + osoba1.kraj);
// zmiania miasta
osoba5.zmienMiasto('UK');
console.log(osoba5.miasto);
// zmiana wieku
console.log(osoba1.wiek);
osoba1.zmienWiek(osoba1.wiek+1);
console.log(osoba1.wiek);

// zadanie 2

class Calc {
    constructor(numbers) {
        this.numbers = numbers;
        this.history = [];
    }

    add(name) {
        const result = this.numbers.reduce((a, b) => a + b);
        this.saveToHistory('Adding', result);
        return result;
    }

    substract(city) {
        const result = this.numbers.reduce((a, b) => a - b);
        this.saveToHistory('Substracting', result);
        return result;
    }

    divide() {
        const result = this.numbers.reduce((a, b) => a / b);
        this.saveToHistory('Dividing', result);
        return result;
    }

    multiply() {
        const result = this.numbers.reduce((a, b) => a * b);
        this.saveToHistory('Multiplying', result);
        return result;
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }

    saveToHistory(actionName,result) {
        this.history.push({
            action: actionName,
            input: this.numbers,
            output: result
        })
    }
}

const calc1 = new Calc([6,3]);
calc1.divide();
calc1.multiply();
calc1.add();
console.log(calc1.getHistory());
calc1.clearHistory();
console.log(calc1.getHistory());

const calc2 = new Calc([11, 22, 33]);
calc2.multiply();
calc2.substract();
console.log(calc2.getHistory());

// zadanie 3

console.log('GRA');
function Gra() {
    this.losuj = () => Gra.prototype.liczba = parseInt(Math.random()*11 + 1);
    this.wynik = () => Gra.prototype.liczba && console.log(Gra.prototype.liczba);
    this.sprawdzWygrana = () => 
        Gra.prototype.liczba > 5 ? this.wygrana() : this.wynik();
    this.losujCoSekunde = () => 
        Gra.prototype.randomCounterId = setInterval(this.losuj, 1000);
    this.sprawdzajWygrana = () =>
        Gra.prototype.winCounterId = setInterval(this.sprawdzWygrana, 1000);
    this.wygrana = () => {
        clearInterval(Gra.prototype.winCounterId);
        clearInterval(Gra.prototype.randomCounterId);
        console.log('Wygrana');
    };
}

var gra = new Gra(),
    licznik = new Gra();

gra.sprawdzajWygrana();
gra.losujCoSekunde();
