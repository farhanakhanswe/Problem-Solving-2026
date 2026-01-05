/**
   Question Link: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length < 2) return [1,-1];

    const numsMap = new Map();

    for(let i = 0 ; i < nums.length; i++){
        let diff = target - nums[i];

        if(numsMap.has(diff)){
            return[i, numsMap.get(diff)];
        }

        numsMap.set(nums[i], i);
    }

    return [-1, -1];
};
