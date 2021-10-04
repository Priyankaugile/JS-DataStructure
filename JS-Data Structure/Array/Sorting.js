
let numArray = new Array();
for (let i = 0; i < 10; i++) {
    numArray.push(Math.floor(Math.random() * 1000));
}
numArray.sort(function numSort(a, b) { return (a - b); });
console.log("Sorted-numArray: " + numArray);
console.log("2nd largest number: " + numArray[numArray.length - 2]);
console.log("2nd smallest number: " + numArray[1]);