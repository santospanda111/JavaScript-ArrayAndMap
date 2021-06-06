/**
 * created map and set the keys.
 */
let diceMap = new Map();
for (diceFace = 1; diceFace <= 6; diceFace++) {
    diceMap.set(diceFace, 0);
}
/**
 * thi loop will run till anyone key will not get 10.
 */
while (diceMap.get(1) < 10 && diceMap.get(2) < 10 && diceMap.get(3) < 10 && diceMap.get(4) < 10 && diceMap.get(5) < 10 && diceMap.get(6) < 10) {
    let roll = Math.floor(Math.random() * 10) % 6 + 1;
    count = diceMap.get(roll) + 1;
    diceMap.set(roll, count);
}
console.log(diceMap);
/**
 * here i have taken min and max value.
 * min method will find out the min value from that dicemap values.
 * max value is considered as 10.
 */
let minValue = Math.min(...diceMap.values());
let maxValue = 10;
for (i = 1; i <= 6; i++) {
    count = diceMap.get(i);
    if (count == minValue) {
        console.log("Dice with face value " + i + " has minimum counts which is " + minValue);
    }
    else if (count == maxValue) {
        console.log("Dice with face value " + i + " has maximum counts which is " + maxValue);
    }
}