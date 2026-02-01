/**
 * Question Link: https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // given int array nums, return all the triplets
    // i != j i != k j!= k
    // nums[i] + nums[j] + nums[k] == 0
    // soln set must not contain duplicate triplets
    // so each subarray will contain 3 unique elements that add up to 0

    // preparation:
    // we pick one num in a parent loop
    // we then add that num with another num in a child loop
    // we then add the result so far with another num in a grandchild loop
    // if the total is 0, we can add the three elements to a subarray which can
    // later be pushed to the final array we will return
};