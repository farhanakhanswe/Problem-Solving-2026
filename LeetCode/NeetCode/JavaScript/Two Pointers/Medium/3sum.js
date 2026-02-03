/**
 * Question Link: https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = []

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        leftPtr = i + 1;
        rightPtr = nums.length - 1;

        while (leftPtr < rightPtr) {
            let threeSum = nums[i] + nums[leftPtr] + nums[rightPtr];
            if (threeSum > 0) {
                rightPtr -= 1;
            } else if (threeSum < 0) {
                leftPtr += 1;
            } else {
                result.push([nums[i], nums[leftPtr], nums[rightPtr]]);
                leftPtr += 1;

                while (nums[leftPtr] == nums[leftPtr - 1] && leftPtr < rightPtr) {
                    leftPtr += 1
                }
            }
        }
    }

    return result;
};