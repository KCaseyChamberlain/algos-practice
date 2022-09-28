// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

let nums = [1, 7, 3, 6, 5, 6]

var pivotIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let jValue = 0
        let kValue = 0

        for (let j = i - 1; j >= 0; j--) {
            jValue += nums[j]
        }
        for (let k = i + 1; k < nums.length; k++) {
            kValue += nums[k]
        }

        // console.log(i, jValue, kValue)

        if (kValue == jValue) {
            return i
        } else if (i == nums.length - 1){
            return -1
        }
    }
};

console.log(
    pivotIndex(nums)
)