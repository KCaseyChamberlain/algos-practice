let nums = [1, 1, 1, 2, 3]

var removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1)
                j -= 1
            }
        }
    }             
    return nums
};

console.log(
    removeDuplicates(nums)
)
