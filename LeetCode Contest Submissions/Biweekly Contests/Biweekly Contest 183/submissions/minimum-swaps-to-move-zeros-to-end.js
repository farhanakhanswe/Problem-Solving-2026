// Question Link: https://leetcode.com/contest/biweekly-contest-183/problems/minimum-swaps-to-move-zeros-to-end/
// The following solution was posted during contest period.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
    // two distinct indices i and j and swap nums[i] and nums[j]
    // return an integer denoting the minimum number of operations required
    // to move all 0s to the end of the array

    // thought process
    // i could run a for loop that will traverse elemnts from left to right
    // i will add an inner loop that will traverse elements from right to left
    // if the el in parent loop is a 0 and the element in inner loop is non-zero, i will swap them
    // and keep a count
    // we need to ensure we are only swapping distinct indices i and j so we have to control the 
    // loops, the inner loop will not move past the current el in the parent loop
    // so inner loop will be
    // for(j = nums.length - 1; j > i; j-- )
    // but that itself is not enough. i will keep a track of the last index from the right that was swapped
    // i can keep a map of the indices that were swapped, if they don't exist in the map, i will swap

    const swappedIndicesMap = new Map();
    let min = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0 && !swappedIndicesMap.has(i)){
            for(let j = nums.length - 1 ; j > i; j--){
                if(nums[j] !== 0 && !swappedIndicesMap.has(j)){
                    let val = nums[i];
                    nums[i] = nums[j];
                    nums[j] = val;
                    swappedIndicesMap.set(i);
                    swappedIndicesMap.set(j);
                    min++;
                    break;
                }
            }
        }
    }

    return min;
};
