str = "[({})]"

var isValid = function (s) {
    const hashMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = []

    for (let ch of str) {
        if (hashMap[ch]) {
            stack.push(hashMap[ch])
        } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};

console.log(
    isValid(str)
)