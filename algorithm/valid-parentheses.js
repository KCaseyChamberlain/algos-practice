let str = "[({})]";

const validParen = function (str) {
    let hashMap =
    {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let stack = [];

    for (ch of str) {
        if (hashMap[ch]) {
            stack.push(hashMap[ch]);
        } else if (stack.length != 0 && stack[stack.length - 1] == ch) {
            stack.pop();
        } else {
            return false;
        }
    }
    console.log(stack);
    return (stack.length == 0) ? true : false;
};


console.log(validParen(str));
