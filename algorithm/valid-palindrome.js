// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
    let hashMap = {};
    let oddCount = 0;

    // convert string to lowercase and non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9-]/g, '');

    // counts the occurrence of characters with hasMap
    for (ch of s) {
        hashMap[ch] = (!hashMap[ch]) ? 1 : hashMap[ch] += 1;
    }

    for (ct in hashMap) {
        if (hashMap[ct] % 2 != 0) {
            oddCount += 1;
        }
    }

    return (oddCount < 2) ? true : false;
};

console.log(
    isPalindrome(s)
);