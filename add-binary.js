let a = "1010"
let b = "1011"

var addBinary = function (a, b) {
    let s = []
    let carry = 0

    if (a.length >= b.length) {
        var aSplit = a.split("")
        var bSplit = b.split("")
    } else if (b.length > a.length) {
        var aSplit = b.split("")
        var bSplit = a.split("")
    } else null

    while (aSplit.length !== bSplit.length) {
        bSplit.unshift("0")

    }
    console.log(bSplit)
    console.log(aSplit)

    for (let i = aSplit.length - 1; i >= 0; i--) {
        if (aSplit[i] == 0 && bSplit[i] == 0 && carry == 0) {
            s.unshift("0")
        } else if (aSplit[i] == 0 && bSplit[i] == 1 && carry == 0) {
            s.unshift("1")
        } else if (aSplit[i] == 1 && bSplit[i] == 0 && carry == 0) {
            s.unshift("1")
        } else if (aSplit[i] == 1 && bSplit[i] == 1 && carry == 0) {
            s.unshift("0")
            carry = 1
        }



        // CREATE IF ELSE STATEMENTS FOR IF THERE IS A CARRY!!!
        else if (aSplit[i] == 0 && bSplit[i] == 0 && carry == 1) {
            s.unshift("1")
            carry = 0
        } else if (aSplit[i] == 0 && bSplit[i] == 1 && carry == 1) {
            s.unshift("0")
            carry = 1
        } else if (aSplit[i] == 1 && bSplit[i] == 0 && carry == 1) {
            s.unshift("0")
            carry = 1
        } else if (aSplit[i] == 1 && bSplit[i] == 1 && carry == 1) {
            s.unshift("1")
            carry = 1
        } 
    }
    if(carry == 1){
        s.unshift("1")
        carry = 0
    }
    return s.join("")
};

console.log(
    addBinary(a, b)
)