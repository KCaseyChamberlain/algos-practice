let a = "11"
let b ="1"

var addBinary = function(a, b) {
    let s = []
    
    if(a.length >= b.length){
        var aSplit = a.split("")
        var bSplit = b.split("")
    } else if(b.length > a.length){
        var aSplit = b.split("")
        var bSplit = a.split("")
    } else null
    
    
    for(let i = aSplit.length - 1; i >= 0; i--){
        for(let j = bSplit.length - 1; j >=0; j--){
            if(aSplit[i] == 0 && bSplit[j] == 0){
                s.unshift("0")
            } else if (aSplit[i] == 0 && bSplit[j] == 1){
                s.unshift("1")
            } else if (aSplit[i] == 1 && bSplit[j] == 0){
                s.unshift("1")
            } else if (aSplit[i] == 1 && bSplit[j] == 1)
                s.shift()
            s.unshift("0")
            s.unshift("1")
        }
    }
    return s.join("")
};