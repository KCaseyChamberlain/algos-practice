let nums = [1, 3, 5, 6]
let target = 7

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i
        } else if (nums[i] < target && nums[i + 1] > target) {
            return i + 1
        } else if (nums[nums.length - 1] < target) {
            return nums.length
        } else if (target < nums[0]) {
            return 0
        }
    }
};

console.log(
    searchInsert(nums, target)
)

// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the index 
// where it would be if it were inserted in order.
