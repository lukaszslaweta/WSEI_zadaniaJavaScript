// Zadanie 1

function getTags(els) {
    const elsArr = Array.from(els);
    return elsArr.map((el) => el.tagName);
}

console.log(getTags(document.getElementsByClassName('more-divs')));

// zadanie 2

function getCode(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}
getCode(document.querySelector('.short-list'));

// zadanie 3

function calcAttr(liczby) {
    return Object.values(liczby).reduce((sum, val) =>
        sum + (isNaN(val) ? 0 : parseInt(val)), 0);
}
console.log(calcAttr(document.getElementById('datasetCheck').dataset));

// zadanie 4

document.getElementById('spanText').innerHTML = 'dowolny';

// zadanie 5

document.getElementById('spanText').className = 'dowolna';

// Zadanie 6

function printClassesAndRemove(classes) {
    classes.forEach(v => console.log(v));
    console.log([...classes].join('+'));
      document.getElementsByClassName(classes.value)[0].classList = [];

    console.log('Usunięto wszytskie klasy');
}

printClassesAndRemove(document.getElementById('classes').classList);

// Zadanie 7

function addAttributes(els) {
    const filtered = [...els].filter(el => !el.getAttribute('data-text'));
    filtered.forEach((el) => {
      el.setAttribute('data-text', 'text');
    })
  }
  
  addAttributes(document.getElementById('longList').getElementsByTagName('li'));
  
  // Zadanie 8

function saveString(string) {
  const obj = {
    newClass: string
  }
  return obj;
}

function addNewClassToDiv(obj) {
  const newClass = obj.newClass;
  document.getElementById('myDiv').classList.add(newClass);
}

// zadanie 9

function addEvent(rand) {
    document.getElementById('numbers').className = rand%2===0 ? 'even' : 'odd';
}
addEvent(parseInt(Math.random()*11));

// zadanie 10

function getValues(element) {
    return Object.values(element.querySelectorAll('li')).map((li) => li.innerHTML);
}
console.log(getValues(document.getElementById('longList')));

// zadanie 11

function changeValues(lis) {
    Object.values(lis).forEach((li) => li.innerHTML = parseInt(Math.random()*11));
}
changeValues(document.getElementById('longList').children);