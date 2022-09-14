// Given a number A, find the smallest number which has only 1s and 0s as its digits which are divisible by the number A.

// For example:
// If the given number A is 4, the smallest number with 1s and 0s which is divisible by 4 is 100.

// If the given number A is 3, the answer would be 111.

let A = 7

function divisibleBinary(A) {
    // binary has to start at 1 because everything divided by 0, will be the smallest result.
    let binary = [1]
    let carry = 0
    let found = false

    while (!found) {

        if (binary.join('') % A == 0) {
            found = true
        } else {
            // else statment increments the binary array's indexes.
            carry = 1

            for (let i = binary.length - 1; i >= 0; i--) {
                // if carry does not equal 1, the binary array's index will not be altered.
                if (binary[i] == 1 && carry == 1 && binary[i - 1] == null) {
                    binary[i] = 0
                    binary.unshift(1)
                    carry = 0
                } else if (binary[i] == 0 && carry == 1) {
                    binary[i] = 1
                    carry = 0
                } else if (binary[i] == 1 && carry == 1) {
                    binary[i] = 0
                    carry = 1
                }
            }
        }
    }
    return binary.join('')
}

console.log(
    divisibleBinary(A)
)