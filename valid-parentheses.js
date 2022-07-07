s = "[({})]"

var isValid = function (s) {
    const hashMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = []

    for (ch of s) {
        if (hashMap[ch]) stack.push(hashMap[ch])
        else if (stack.length > 0 && stack[stack.length - 1] === ch) stack.pop()
        else return false
    }
    if (stack.length === 0) return true
    else return false
};

console.log(
    isValid(s)
)