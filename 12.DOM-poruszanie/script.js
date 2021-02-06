// zadanie 1

console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousSibling.previousSibling);
console.log(document.getElementById('foo').childNodes);
console.log(document.getElementById('foo').parentElement);
console.log(document.getElementById('foo').firstChild);
var foo = document.getElementById('foo');
console.log(foo.childNodes[parseInt(foo.childElementCount/2)]);

// Zadanie 2

function Click(el) {
    el.addEventListener('click', () => {
        console.log(el.textContent.trim());
    });
}

Click(document.getElementById('ex2'));

// Zadanie 3

document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        let sib = el.nextElementSibling;
        console.log(sib);
        sib.style.display = sib.style.display === "none"
            ? "inline"
            : "none"
    });
});

// Zadanie 4

document.querySelectorAll('div#ex3 button').forEach((el) => {
    el.addEventListener('click', () => {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        el.parentElement.style.backgroundColor = randomColor;
    });
});

// zadanie 5

function color() {
    var ex5 = document.getElementById('ex5');
    ex5.querySelectorAll('div').forEach((div) => {
        div.onmouseover = () => {
            var elements = ex5.querySelectorAll('li:first-of-type');
            var elements = ex5.querySelectorAll('li:last-of-type');
            var elements = ex5.querySelectorAll('li:nth-of-type(2n)');
            var elements = ex5.querySelectorAll('li');
            var elements = ex5.querySelectorAll('ul');
            elements.forEach(el => el.style.color = div.style.backgroundColor);
        };
    });
}
color();

// zadanie 6

var ex6 = document.getElementById('ex6');
var ex1 = ex6.querySelector(':first-child :first-child :first-child');
console.log(ex1);
var ex2 = ex6.querySelector(':first-child :first-child');
console.log(ex2);
var ex3 = ex6.parentElement.querySelector(':nth-child(2) :first-child :first-child :first-child');
console.log(ex3);