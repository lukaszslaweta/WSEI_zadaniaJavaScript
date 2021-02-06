// Zadanie 1

const el = document.createElement("div");
el.innerText = "To jest nowy element";
document.body.appendChild(el);

// zadanie 2

var favFruits = ['winogrono', 'jabłko', 'liczi', 'mango', 'malina', 'borówka'];
var zad2 = create('ul');
favFruits.forEach((el) => {
    zad2.append(create('li', el));
});
body.append(zad2);

// Zadanie 3

document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});

// zadanie 4

var button1 = create('button', 'removed');
button1.onclick = (evt) => evt.currentTarget.remove();
body.append(button1);

// Zadanie 5

const rand = Math.floor(Math.random() * 20);
for (let i = 0; i < rand; i++) {
    const randDiv = document.createElement('div');
    randDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randDiv);
}

// zadanie 6

var div1 = create('div', 'to jest div');
var span1 = create('span', 'to jest span');
var div2 = create('div');
var div3 = create('div', 'to jest div');
var span2 = create('span', 'to jest span');

div2.append(div3);
body.append(div1);
body.append(span1);
body.append(div2);
body.append(span2);

// zadanie 7

var lista1 = create('ul'), lista2 = create('ul');
owoce.forEach((el) => {
    lista1.append(create('li', el));
});
var btn_zad_7 = create('button', 'przerzuć element z listy');
btn_zad_7.onclick = (e) => {
    lista2.append(lista1.querySelector('li:last-child'));
    if (lista1.childElementCount === 0) e.currentTarget.disabled = true;
}

body.append(lista1);
addBr();
body.append(lista2);
addBr();
body.append(btn_zad_7);
addBr();

// Zadanie 8

const fieldset = document.createElement('fieldset');
const inputs = [{
    label: 'Element',
    id: 'el',
    type: 'text'
}, {
    label: 'Tekst',
    id: 'text',
    type: 'text'
}, {
    label: 'Kolor',
    id: 'color',
    type: 'color'
}, {
    label: 'Ile razy',
    id: 'count',
    type: 'number'
}, {
    label: 'Utwórz',
    type: 'submit'
}];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            createElement(e);
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function createElement(e) {
    e.preventDefault();
    let el = null;

    inputs.forEach((v) => {
        const value = document.getElementById(v.id)?.value;

        switch (v.id) {
            case 'el': el = document.createElement(value); break;
            case 'text': el.innerText = value; break;
            case 'color': el.style.color = value; break;
            case 'count': for (let i = 1; i <= Number(value); i++) {
                document.body.appendChild(el.cloneNode(true));
            } break;
        }
    });
}

document.body.appendChild(fieldset);

// Zadanie 9

const fieldset = document.createElement('fieldset');
const table = document.createElement('table');

const inputs = [{
    label: 'Imię',
    id: 'fName',
    type: 'text'
}, {
    label: 'Nazwisko',
    id: 'name',
    type: 'text'
}, {
    label: 'Wiek',
    id: 'age',
    type: 'number'
}, {
    label: 'Ilość dzieci',
    id: 'kids',
    type: 'number'
}, {
    label: 'Płeć',
    id: 'gender',
    type: 'text'
}, {
    label: 'Więcej',
    type: 'submit',
    id: 'more'
}, {
    label: 'Utwórz',
    type: 'submit',
    id: 'print'
}];

let data = [];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            if (v.id === 'print') {
                renderTable(e);
            } else {
                addRow();
            }
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function addRow() {
    const row = [];
    inputs.forEach((v) => {
        if (v.type !== 'submit') {
            const value = document.getElementById(v.id)?.value;
            row.push(value);
        }
    });
    data.push(row);
    // if table exist, re-render on adding new row
    if (table.children.length > 0) {
        renderTable();
    }
}

function renderTable(e) {
    e?.preventDefault();
    table.innerHTML = '';
    if (data.length > 0) {
        const dataCells = inputs.filter(v => v.type !== 'submit');
        // create table header
        const thead = document.createElement('thead');
        dataCells.forEach(v => {
            const th = document.createElement('th');
            th.innerText = v.label;
            thead.appendChild(th);
        });
        table.appendChild(thead);
        // create table body
        const tbody = document.createElement('tbody');
        capitalize();
        data.forEach((v, i) => {
            const tr = document.createElement('tr');
            v.forEach(val => {
                const td = document.createElement('td');
                td.innerText = val;
                tr.appendChild(td);
            })
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Usuń';
            removeButton.addEventListener('click', (e) => {
                data.splice(i, 1);
                renderTable();
            });
            tr.appendChild(removeButton);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }
}

document.body.appendChild(fieldset);
document.body.appendChild(table);

// zadanie 10

function capitalize(str) {
    if (str.length < 1) return str;
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}
function zadanie10() {
    document.querySelectorAll('#ex9 input').forEach((el) => el.value = capitalize(el.value));
}

// Zadanie 11

function extarctNumbersAndMultiplyToDivs(str) {
    const numbers = str.match(/[0-9]+/g);
    if (numbers.length > 0) {
        console.log(numbers.reduce((a, b) => Number(a) + Number(b)));

        const mmultiplier = numbers.reduce((a, b) => Number(a) * Number(b));

        for (let i = 0; i < mmultiplier; i++) {
            const div = document.createElement('div');
            div.innerText = `div${i}`;
            document.body.appendChild(div);
        }
    }
}

extarctNumbersAndMultiplyToDivs('foo1bar2test10nice2');

// zadanie 12

function zadanie12(str) {
    let obj = Object.create(null);
    obj.string = str;
    obj.searchAla = () => 
        body.append(create('div', /Ala/.test(obj.string) ? 
            obj.string = obj.string.replaceAll('Ala', 'Ola')
            : 'Slowo Ala nie wystepuje w tekście'));
    return obj;
}

// zadanie 13

function zadanie13_a(strings) {
    return strings.map((string) => string.length);
}
function zadanie13_b(liczby) {
    return liczby.reduce((sum, val) => sum += val, 0);
}
function zadanie13_c(liczby) {
    return zadanie13_b(liczby) / liczby.length;
}
let zad13_var = zadanie13_a(['tessst', 'test2', 'długi tekst']);
console.log(zad13_var);
console.log(zadanie13_b(zad13_var));
console.log(zadanie13_c(zad13_var));


// Zadanie 14

let obj = {
    name: '',
    surname: ''
};

function modifyObj(name, surname) {
    obj.name = name;
    obj.surname = surname;
    obj.nameLength = name.length;
    obj.surnameLength = surname.length;
    if (name.length > 5 || surname.length > 5) {
        const btn = document.createElement('button');
        btn.innerText = 'Restore';
        btn.addEventListener('click', (e) => {
            obj = {
                name: '',
                surname: ''
            }
        });
        document.body.appendChild(btn)
    }
}

modifyObj('Jan', 'Kochanowski');