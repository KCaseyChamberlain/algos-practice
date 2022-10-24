// return false, or a palindrome if the string can be rearranged into one
let str = 'iamxnbdtshdjdikamxnbtdshj';

function rearrangedPossiblePalindrome(str) {
    let hashMap = {};

    for (let s of str) {
        // hashmap counts the number of times a character appears in str
        hashMap[s] = (!hashMap[s]) ? 1 : hashMap[s] += 1;
    }
    console.log(hashMap)

    let oddCount = 0;
    // counts the odd number occurring characters in the str
    for (let char in hashMap) {
        if (hashMap[char] % 2 !== 0) {
            oddCount += 1;
            var oddNum = char
        }
    }

    // palindrome check
    // if 2+ characters appear an odd number of times, the string is not a palindrome
    if (oddCount > 1) {
        return false
    } else {
        let result = [];

        for (let char in hashMap) {
            // the palindrome will be mapped one half at a time
            hashMap[char] = hashMap[char] /= 2

            if (char !== oddNum) {
                // all the even number occurring characters will be mapped to the result array before the odd, if there is an odd
                while (hashMap[char] > 0) {
                    result.push(char)
                    hashMap[char] -= 1
                }
            } else if (oddNum) {
                // the odd occurring character is mapped to the result array
                while (hashMap[char] > 1) {
                    result.push(char)
                    hashMap[char] -= 1
                }
            }
        }
        // concats the result array, oddNum variable if there is one, and the result array again in reverse order to provide the full palidrome
        let rearrangedTruePalindrome = result.concat(oddNum).concat(result.reverse()).join('');

        return rearrangedTruePalindrome
    }
};

console.log(
    rearrangedPossiblePalindrome(str)
);