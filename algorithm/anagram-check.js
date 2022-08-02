function anagram(firstString, secondString) {
    function sortedString(str) {
        return str.toLowerCase().split('').sort().join('');
    }
    return sortedString(firstString) === sortedString(secondString);
}

console.log(
    anagram("IAmLordVoldemort", "TomMarvoloRiddle")
)