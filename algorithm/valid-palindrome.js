// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
let s = "A man, a plan, a canal: Panama"

var isPalindrome = function (s) {
    let hashMap = {}

    s = s.toLowerCase()
    s = s.replace(/[^a-z0-9-]/g, '')
    
return s

}

console.log(
    isPalindrome(s)
)