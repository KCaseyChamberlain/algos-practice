let s = "   fly me   to   the moon  "

var lengthOfLastWord = function (s) {
    let splitS = s.split("")
    // console.log(splitS)

    for (let i = 0; i < splitS.length; i++) {
        if (splitS[i] == ' ' && splitS[i + 1] == ' ') {
            splitS.splice(i, 1)
            i -= 1
            // console.log("space")
        } else if(splitS[0] == ' '){
            splitS.splice(0, 1)
            i -= 1
        } else if (splitS[splitS.length -1] == ' ')
        splitS.pop()
    } 

    let noSpace = splitS.join("")
    let countReady= noSpace.split(" ")
    return countReady[countReady.length-1].length
};

console.log(
    lengthOfLastWord(s)
)