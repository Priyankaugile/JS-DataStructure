
let numArray = new Array();
for (let i = 0; i < 10; i++) {
    numArray.push(Math.floor(Math.random() * 1000));
}
let max = Math.max(...numArray), max2 = -Infinity;
for (let num1 of numArray) if (num1 > max2 && num1 < max) max2 = num1;
let min = Math.min(...numArray), min2 = +Infinity;
for (let num2 of numArray) if (num2 < min2 && num2 > min) min2 = num2;
console.log("numArray: " + numArray);
console.log("2nd largest number: " + max2);
console.log("2nd smallest number: " + min2);

