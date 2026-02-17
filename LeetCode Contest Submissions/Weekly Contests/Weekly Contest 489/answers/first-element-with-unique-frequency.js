/* Question Link: https://leetcode.com/problems/first-element-with-unique-frequency/ */

// Solution 1: Time Complexity: O(n) & Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function (nums) {
    // i am given an int array nums
    // i will return an integer denoting the first element (scanning from left to right)
    // in nums whose frequency is unique
    // that is, no other integer appears the same number of times in nums
    // if there is no such element, return -1

    // so nums = [20,10,30,30]
    // here we return 30 as it is the first number with unique freq as we move from
    // left to right

    let numFreqMap = new Map(); // key -> num ; value -> frequency
    let freqCountMap = new Map(); // key -> frequency; value -> frequency count

    for (let i = 0; i < nums.length; i++) {
        if (numFreqMap.has(nums[i])) {
            numFreqMap.set(nums[i], numFreqMap.get(nums[i]) + 1);
        } else {
            numFreqMap.set(nums[i], 1);
        }
    }

    for (const freq of numFreqMap.values()) {
        if (freqCountMap.has(freq)) {
            freqCountMap.set(freq, freqCountMap.get(freq) + 1);
        } else {
            freqCountMap.set(freq, 1);
        }
    }

    // now lets try to find the first number with unique frequency as we move from left to right in the array

    for (let i = 0; i < nums.length; i++) {
        let freq = numFreqMap.get(nums[i]);

        if (freqCountMap.get(freq) === 1) {
            return nums[i];
        }
    }

    return -1;

};