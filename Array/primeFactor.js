/**
 * here i have created one array to store prime factors.
 * added index with 0.
 * by using for loop it will check the prime factors and added into the array.
 */
let primeFactorsArr = new Array();
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number to display its Prime Factors: "));
let index = 0
for (num = 2; num <= number; num++) {
    remain = number % num;
    if (remain == 0) {
        primeFactorsArr[index] = num;
        number /= num;
        index++;
        num--;
    }
}
console.log("Prime Factors are : \n" + primeFactorsArr);