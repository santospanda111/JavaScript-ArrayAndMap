/**
 * created an array and generated 10 random numbers of 3digit.
 */
let randomArr = new Array();
for (num = 0; num < 10; num++) {
    ranNum = Math.floor(Math.random() * 1000) % 900 + 100;
    randomArr.push(ranNum);
}
/**
 * here i have created 4 values of randomArr array.
 */
let largest = randomArr[0];
let largest_second = randomArr[0];
let smallest = randomArr[0];
let smallest_second = randomArr[0];
/**
 * this for loop will generate the second smallest value and second largest value from the array.
 */
for (num = 1; num < randomArr.length; num++) {
    if (randomArr[num] < smallest_second) {
        if (randomArr[num] < smallest) {
            smallest_second = smallest;
            smallest = randomArr[num];
        }
        else { smallest_second = randomArr[num]; }
    }

    if (randomArr[num] > largest_second) {
        if (randomArr[num] > largest) {
            largest_second = largest;
            largest = randomArr[num];
        }
        else { largest_second = randomArr[num]; }
    }
}
console.log("2nd Largest number is: " + largest_second);
console.log("2nd Smallest number is: " + smallest_second);
console.log(randomArr);