function reverseInteger(n) {
    let reversedNum = parseInt(String(n).split("").reverse().join(""));
    // conditional ternary operator
    // condition ? expression to execute if condition is truthy : expression to execute if falsy
    return n >= 0 ? reversedNum : reversedNum * -1;
}

console.log(reverseInteger(-250));































function reverseInt(n) {
    let reversedInt = parseInt(String(n).split("").reverse().join(""));

    if (n >= 0)
        console.log(reversedInt)
    else
        console.log(reversedInt * -1)
};

reverseInt(-221)