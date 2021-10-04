console.log("\nTo find individuals among 50 members born between 1992 & 1993 having the same birth-month:");
let monthMap = new Map(), month, minMonth = 1, maxMonth = 12, people = 50;
for (let i = minMonth; i <= maxMonth; i++) {
    monthMap.set(i, "");
}
for (let i = 1; i <= people; i++) {
    month = Number(Math.floor(Math.random() * (maxMonth - minMonth + 1)) + minMonth);
    monthMap.set(month, monthMap.get(month) + " " + i)
}
for (let [key, value] of monthMap) console.log("Month: " + key + "   Individuals:" + value);