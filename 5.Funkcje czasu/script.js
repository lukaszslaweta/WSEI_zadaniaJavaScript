// Zadanie 1

let i = 1;
const timer = setInterval(function () {
    if (i <= 15) {
        console.log(`Cześć po raz ${i}`);
        i++;
    }
    else clearInterval(timer);
}, 3000);

// Zadanie 2

const array = ['q', 'w', 'e', 'r', 't','y'];
let i = 0;
setTimeout(() => {
    console.log(array);
    const timer = setInterval(function () {
        if (i < array.length) {
            console.log(array[i]);
            i++;
        }
        else clearInterval(timer);
    }, 3000);
}, 2000);