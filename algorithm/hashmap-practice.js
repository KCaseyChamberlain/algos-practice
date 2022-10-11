let str = 'slice'

function hashMapCount(str) {
    let hashMap = {}

    for (let s of str) {
        hashMap[s] = hashMap[s] ? hashMap[s] + 1
            : 1;
    }

    return hashMap
}

console.log(
    hashMapCount(str)
)