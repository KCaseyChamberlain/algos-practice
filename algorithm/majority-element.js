
let nums = [2, 6, 2, 1, 3, 1, 2, 2, 2]


var majorityElement = function (nums) {
    const hash = {};

    for (let num of nums) {
        if (!hash[num]) {
            hash[num] = 1;
        } else {
            hash[num]++;
        }
    }

    for (let key in hash) {
        if (hash[key] > Math.floor(nums.length / 2)) {
            return key;
        }
    }
};

console.log(
    majorityElement(nums)
)

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ 
// times. You may assume that the majority element always exists 
// in the array.
