// Question Link: https://leetcode.com/problems/limit-occurrences-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var limitOccurrences = function(nums, k) {
    // we have to maintain the relative order
    // each unique number will appear at most k times in the resulting array

    // thought process
    // we can keep track of the number and its count using a map
    // we can travserse the numbers from left to right
    // we will check if the total count of the current number has reached "k"
    // if it has, we will skip to the next iteration
    // if it has not, we will push the curr el to the resulting array and increase the count for the num in the map

    const map = new Map();
    let resultingArr = [];

    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1);
            resultingArr.push(nums[i]);
        }else {
            if(map.get(nums[i]) < k){
                map.set(nums[i], map.get(nums[i]) + 1);
                resultingArr.push(nums[i]);
            }
        }
    }

    return resultingArr;
};
