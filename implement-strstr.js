let haystack = "hello"
let needle = "ll"

var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0] && haystack.slice(i, needle.length + i) == needle) {
            return i
        } else null
    }
    return -1
};

console.log(
    strStr(haystack, needle)
)

// Given two strings needle and haystack, return the index of the 
// first occurrence of needle in haystack, or -1 if needle 
// is not part of haystack.