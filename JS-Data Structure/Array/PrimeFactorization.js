
const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt("Enter a positive integer: "));

function getPrimeFactorization(n){
    let factors = new Array();
    if (n >= 1 && Number.isInteger(n)) {
        for (let i = 1; i * i <= n; i++)
            if (n % i == 0) {
                factors.push(i);
                if (n / i != i)   
                    factors.push(n / i);
            }
    } else console.log("Invalid user input.");
    factors.sort(function numSort(a, b) { return (a - b); });
    return factors;
}

let factors = getPrimeFactorization(n);
console.log("Factors of " + n + " are: " + factors.toString())