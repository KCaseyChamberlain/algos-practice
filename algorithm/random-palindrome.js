// return true or false
let str = 'xixutitu';

function isPalindrome(str) {
    let stack = [];
    let testString = [];

    let count = {};
    // y:4
    // s:2
    // a:2
    // c:1
    // maps the characters and their count appearance
    for (let s of str) {
        count[s] = count[s] ?
            count[s] + 1
            : 1;
    }

    // orders characters by highest count
    count = Object.fromEntries(
        Object.entries(count).sort(([, a], [, b]) => a + b)
    )
    console.log(count)

    let mapped = false

    while (!mapped) {
        mapped = true
        // uses a for in loop to push the value from count[letter} into the testString array
        for (let letter in count) {
            if (count[letter] > 0) {
                mapped = false

                testString.push(letter)
                count[letter] -= 1

                console.log(count)
            }
        }
        // uses a for in loop to push the value into the stack array
        // a stack data structure is used to reverse the order so a for in loop can still be utilized
        // instead of iterating from left to right repeatedly, this 'snakes' left, right, left, right
        for (let letter in count) {
            if (count[letter] > 0) {
                stack.push(letter)
                count[letter] -= 1
            }
        }
        // push() the stack in reverse order into the testString array
        for (let i = stack.length - 1; i >= 0; i--) {
            testString.push(stack[i])

        }
        console.log(stack, "stack")
        // empty stack in case the while loop iterates more than once
        stack = []
    }
    console.log(testString, "test string")

    // palindrome check
    if (testString.join('') == testString.reverse().join('')) {
        return true
    } else return false
};

console.log(
    isPalindrome(str)
);