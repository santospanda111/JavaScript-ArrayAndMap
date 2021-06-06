/**
 * created one array and generated 10 random numbers of 3 digits.
 * by using push method ...it's get added those numbers.
 */
let randomArr = new Array();
for (num = 0; num < 10; num++) {
    ranNum = Math.floor(Math.random() * 1000) % 900 + 100;
    randomArr.push(ranNum);
}
/**
 * here i have sorted the array in ascending order..then found the 2nd largest and 2nd smallest value.
 */
randomArr.sort();
console.log("2nd Largest number is: " + randomArr[randomArr.length-2]);
console.log("2nd Smallest number is: " + randomArr[1]);
console.log(randomArr);