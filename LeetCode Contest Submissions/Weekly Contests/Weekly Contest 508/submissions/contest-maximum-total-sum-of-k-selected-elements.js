//  Question Link: https://leetcode.com/problems/digit-frequency-score/
//  The following solution was submitted during contest period.

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} mul
 * @return {number}
 */
var maxSum = function(nums, k, mul) {
    // im given an int arr nums and two ints k and mul
    // select exactly k elements from nums. Process these elements one by one
    // in any order you choose
    // for each selected element, independently choose one of the following:
    // add the element's value to the total sum, or
    // multiply the element by the current val of mul and add the result to the total sum
    // after processing each selected el. mul decreases by 1, regardless of which option
    // was chosen. the current val of mul may become 0 or negative
    // return an int denoting the max possible total sum

    // thought process
    // for each el in numbers, i will check which one of the two choices increases the
    // sum the most and then i will pick that choice. if multiply choice is greater than
    // add choice, i will decrease mul by 1
    // actually as long as mul is >= 1 we can do multiplication and after
    // when mul becomes <= 1 we will do addition
    // now lets' come to using exactly k elements from nums
    // we can sort the nums array and pick the k number elements right to left
    // for multiplication but after each operation mul decreases by 1. once mul === 0,
    // we switch to addition

    const sortedArr = nums.sort((a, b) => (a - b));
    let count = 0;
    let totalSum = 0;
    
    for(let i = sortedArr.length - 1; i >= 0 ; i--){
        if(count >= k){
            break;
        }
        if(mul >= 1){
            totalSum += sortedArr[i] * mul;
            mul--;
        }else{
            totalSum += sortedArr[i];
        }

        count++;
    }

    return totalSum;
};