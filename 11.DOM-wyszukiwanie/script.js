// zadanie 1

var list = document.querySelectorAll('.list');
console.log(list);

// zadanie 2

function getTag(tag) {
    return document.getElementsByTagName(tag);
}
var li = getTag('div');
console.log(li);

// zadanie 3

var idList = document.getElementById('list');
console.log(idList);

// Zadanie 4

function Print(params) {
  params.forEach((param) => console.log(document.querySelectorAll(param)));
}

Print(['li', 'ul', 'span', 'div.list span', 'div#spans span']);