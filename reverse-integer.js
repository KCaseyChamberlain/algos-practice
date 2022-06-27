function reverseInteger(n) {
    let reversedNum = parseInt(String(n).split("").reverse().join(""));
    return n >= 0 ? reversedNum : reversedNum * -1;
}

console.log(reverseInteger(-250));