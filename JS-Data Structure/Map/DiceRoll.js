console.log("\nTo find maximum and minimum times of die-roll among 1-6 till any one reaches 10 times:");
const min = 1, max = 6;
let die, minDie, maxDie, dieCount, minDieCount = 0, maxDieCount = 10;
let dieMap = new Map();
for (die = min; die <= max; die++) {
    dieMap.set(die, minDieCount);
}
while (![...dieMap.values()].includes(maxDieCount)) {
    die = Number(Math.floor(Math.random() * (max - min + 1)) + min);
    dieCount = dieMap.get(die);
    dieMap.set(die, ++dieCount);
}
minDieCount = Math.min(...[...dieMap.values()]);
minDie = new Array();
maxDie = parseInt([...dieMap.values()].indexOf(maxDieCount)) + 1;
for (let [key, value] of dieMap) {
    if (value == minDieCount) minDie.push(key);
    console.log("Die: " + key + "  DieCount: " + value);
}
console.log(`Die number that appeared minimum times: ${minDie}\nDie number that appeared maximum times: ${maxDie}`);
