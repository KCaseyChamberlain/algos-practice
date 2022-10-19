let str = 'dancing queen';

// for of if else
function stringCount(str){
    let hashMap = {};

    for(let s of str){
        console.log(s)
        if(!hashMap[s]){
            hashMap[s] = 1;
        }else{
            hashMap[s] += 1;
        }
    }

    return hashMap;
};

console.log(
    stringCount(str)
);


// for if else
function stringCount(str){
    let hashMap = {};

    for(let i = 0; i < str.length; i++){

        if(!hashMap[str[i]]){
            hashMap[str[i]] = 1;
        }else{
            hashMap[str[i]] += 1;
        }
    }

    return hashMap;
};


// for of ternary
function stringCount(str) {
    let hashMap = {}

    for (let s of str) {
        hashMap[s] = (!hashMap[s]) ? 1 : hashMap[s] + 1;
    }

    return hashMap
}