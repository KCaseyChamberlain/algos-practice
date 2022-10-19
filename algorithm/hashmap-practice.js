let str = 'dancing queen';

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

console.log(
    stringCount(str)
);