let str = "alsdkjfasldfj";

function countStringChar(str) {
    let hashMap = {};
    
    for (char of str) {
        hashMap[char] = (!hashMap[char]) ? 1 : hashMap[char] += 1;
    }

    return hashMap;
};

console.log(
    countStringChar(str)
);