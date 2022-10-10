let str = "yadda"

function getPalindrome(str) {

    // Store counts of characters
    let hmap = new Map();
    for (let i = 0; i < str.length; i++) {
        if (hmap.has(str[i])) {
            hmap.set(str[i], hmap.get(str[i]) + 1);
        }
        else {
            hmap.set(str[i], 1);
        }
    }

    /* find the number of odd elements.
       Takes O(n) */
    let oddCount = 0;
    let oddChar;
    for (let [x, y] of hmap) {
        if (y % 2 != 0) {
            oddCount++;
            oddChar = x;
        }
    }

    /* odd_cnt = 1 only if the length of
       str is odd */
    if (oddCount > 1
        || oddCount == 1 && str.length % 2 == 0)
        return "NO PALINDROME";

    /* Generate first half of palindrome */
    let firstHalf = "", secondHalf = "";
    for (let [x, y] of hmap) {

        // Build a string of floor(count/2)
        // occurrences of current character
        let s = "";
        for (let i = 0; i < Math.floor(y / 2); i++) {
            s += x;
        }

        // Attach the built string to end of
        // and begin of second half
        firstHalf = firstHalf + s;
        secondHalf = s + secondHalf;
    }

    // Insert odd character if there
    // is any
    return (oddCount == 1)
        ? (firstHalf + oddChar + secondHalf)
        : (firstHalf + secondHalf);
}

console.log(getPalindrome(str))