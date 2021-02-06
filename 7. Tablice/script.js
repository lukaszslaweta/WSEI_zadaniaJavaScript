// zadanie 1

var arr = [5,4,3,2,1,0];
console.log(arr);

// zadanie 2

var arr2 = ["78", "90", null, 9.99, 12, 34, 56];
// pierwszy i ostatni
console.log(arr2[0] + ' ' + arr[1]);
// ostatni
console.log(arr2[arr2.length-1]);
// wszystkie
console.log(arr2);
// co drugi
console.log(arr2.reduce(function(prev, cur, index){
    if (index % 2 === 0) {
        prev.push(cur);
    }
    return prev;
}, []));
// wszystkie stringi
arr2.forEach(element => {
    if (typeof element === 'string') {
        console.log(element);
    }
});
// wszystkie numery
arr2.forEach(element => {
    if (typeof element === 'number') {
        console.log(element);
    }
});

// zadanie 3

const arr = [99, -88, 77, -66, 55, -44, 33, -22, 11];

// 1
console.log(arr.reduce((val, el) => val + el, 0));
// 2
console.log(arr.reduce((val, el) => val - el, 0));
// 3
console.log(arr.reduce((val, el) => val+el, 0) / arr.length);
// 4
console.log(arr.filter(val => val%2===0));
// 5
console.log(arr.filter(val => val%2===1));
// 6
console.log(arr.reduce((max, el) => max > el ? max : el));
// 7
console.log(arr.reduce((min, el) => min < el ? min : el));
// 8
console.log(arr.reverse());

// Zadanie 4

function sumAndPrint(arr) {
    console.log(arr.reduce((a, b) => a + b));
}

sumAndPrint([10, 20, 30, 40]);

// zadanie 6

function average(array) {
    array = array.filter(val => val%2===0);
    return sumArray(array) / array.length;
}
console.log(average([1, 2, 3, 4, 5]));

// zadanie 7

function sort(array) {
    return array.sort();
}
console.log(sort([312,264,197]));

// Zadanie 8

function sumIndexes(arr1, arr2) {
    let arrSum = 0;
    arr1.forEach((v, i) => arrSum += i);
    arr2.forEach((v, i) => arrSum += i);
    return arrSum;
}
console.log(sumIndexes([1, 2, 3, 4], [5, 6, 7]));

// Zadanie 9

let arr = [12, 34, 56, 78, 90, 123];
function newArray(array, el) {
    return array.filter((item) => item != el);
}

console.log(newArray(arr, 1));

// zadanie 10

function newArray(array) {
    return array.map(val => val*-1);
}
console.log(newArray([3, -6, 9, -12]));





