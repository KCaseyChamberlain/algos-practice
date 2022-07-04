var romanToInt = function (s) {
    let splitS = s.split("")
    let answer = 0

    for (let i = 0; i < splitS.length; i++) {
        if (splitS[i] === "I") answer += 1
        else if (splitS[i] === "V") answer += 5
        else if (splitS[i] === "X") answer += 10
        else if (splitS[i] === "L") answer += 50
        else if (splitS[i] === "C") answer += 100
        else if (splitS[i] === "D") answer += 500
        else if (splitS[i] === "M") answer += 1000
        else null

        for (let j = i + 1; j < splitS.length; j++) {
            if (splitS[i] + splitS[j] == "IV") answer -= 2
            else if (splitS[i] + splitS[j] === "IX") answer -= 2
            else if (splitS[i] + splitS[j] === "XL") answer -= 20
            else if (splitS[i] + splitS[j] === "XC") answer -= 20
            else if (splitS[i] + splitS[j] === "CD") answer -= 200
            else if (splitS[i] + splitS[j] === "CM") answer -= 200
            else null
        }
    }
    return answer
};

console.log(romanToInt("MCMXCIV"))