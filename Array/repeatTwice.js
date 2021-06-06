/**
 * created one array.
 * then checked the numbers repeated twice by using multiple of 11.
 * then added those numbers in array.
 */
let repeatTwiceArr = new Array();
for (num = 1;num<100;num++) {
    if (num%11 == 0){
        repeatTwiceArr.push(num);
    }
}
console.log("The numbers in range 1 to 100 which repeat twice are:\n" + repeatTwiceArr);