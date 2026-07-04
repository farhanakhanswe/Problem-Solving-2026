// Question Link: https://leetcode.com/problems/unique-middle-element/
// The following solution was submitted during contest period.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    // i am given a int array nums of odd len n
    // return true if the middle el of nums appears exactly once in the array
    // otherwise return false
    const map = new Map();
    
    for(let i = 0; i < nums.length; i++ ){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        }else{
            map.set(nums[i], 1);
        }
    }

    const middleNumIndex = Math.floor(nums.length / 2);

    if(map.get(nums[middleNumIndex]) === 1){
        return true;
    }

    return false;
};