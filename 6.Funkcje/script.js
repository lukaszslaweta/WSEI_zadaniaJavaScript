// Zadanie 1

function MadeIt() {
    console.log('Udało się!');
}

MadeIt();

// zadanie 2

function print(param) {
    console.log(param);
}
print("Hello World");

// zadanie 3

function getArray(array) {
    return array;
}
console.log(getArray([11, 22, 33]));

// Zadanie 4

function printString(str) {
    let i = 0;
    const timer = setInterval(() => {
        if(i < 5) {
            console.log(str);
            i++;
        }
        else{
            console.log("Koniec");
            clearInterval(timer);
        } 
    }, 3000);
}

printString("test");