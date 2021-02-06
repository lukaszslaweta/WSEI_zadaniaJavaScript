// Zadanie 1

document.getElementById('test-event').addEventListener('click', (e) => {
    console.info(e);
});
document.body.addEventListener('mousemove', (e) => {
    console.info(e);
});
document.getElementById('test-event').addEventListener('mouseover', (e) => {
    console.info(e);
});
document.addEventListener('keydown', (e) => {
    console.info(e);
});
document.addEventListener('scroll', (e) => {
    console.info(e);
});
document.getElementById('input-test').addEventListener('input', (e) => {
    console.info(e);
});

// zadanie 2

document.getElementById('ex2').onclick = (evt) => {
    let span = evt.currentTarget.parentNode.querySelector('span');
    span.innerHTML = evt.currentTarget.getAttribute('data-text');
}

// zadanie 3

var kwadrat = document.getElementById('ex3');
kwadrat.onmouseenter = (e) => e.currentTarget.style.backgroundColor = 'blue';
kwadrat.onmouseleave = (e) => e.currentTarget.style.backgroundColor = 'red';

// Zadanie 4

const illegalChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const errorSpan = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    errorSpan.innerText = illegalChars.some(char => e.target.value.includes(char))
        ? 'To pole nie może zawierać cyfr'
        : null;
});

// zadanie 5

document.getElementById('ex5-button').onclick = (e) => {
    let ex5 = document.getElementById('ex5'),
        val = parseInt(ex5.innerHTML) + 1;
    ex5.innerHTML = val;
    if (val > 9) {
        document.getElementById('ex5-button').onclick = null;
    }
}

// zadanie 6

window.onscroll = (e) => document.body.style.backgroundColor = e.currentTarget.scrollY > 200 ? 'red' : 'white';

// Zadanie 7

const calcButtons = document.querySelectorAll('#calculator button');
const calcOutput = document.querySelector('#calculator input');
const numericButtons = [];
const funcButtons = [];
let currentCalc = [];
let calcFinish = false;

calcButtons.forEach((el) => {
    if (parseInt(el.innerText) || el.innerText === '0') {
        numericButtons.push(parseInt(el.innerText));
    } else {
        funcButtons.push(el.innerText);
    }

    el.addEventListener('click', () => {
        if(calcFinish) {
          calcOutput.value = '';
          calcFinish = false;
        }
        if (funcButtons.includes(el.innerText)) {
            currentCalc.push(calcOutput.value, el.innerText);
            console.log(currentCalc);
            calcOutput.value = calcOutput.value + el.innerText;

            return;
        }
        if (currentCalc.length > 1) {
            doCalc([...currentCalc, el.innerText]);
            return;
        }
        calcOutput.value = calcOutput.value + el.innerText;
    });
});

function doCalc(x) {
    currentCalc = [];
  calcFinish = true;
    let result;
    numbers = [
        Number(x[0]),
        Number(x[2])
    ];
    switch (x[1]) {
        case '+': result = numbers[0] + numbers[1]; break;
        case '-': result = numbers[0] - numbers[1]; break;
        case '/': result = numbers[0] / numbers[1]; break;
        case '*': result = numbers[0] * numbers[1]; break;
    }
    calcOutput.value = result;
}