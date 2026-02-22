/* Question Link: https://leetcode.com/problems/check-digitorial-permutation/description/
   The following solution was submitted during the contest period. 
   It is incomplete.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isDigitorialPermutation = function (n) {
    // i am given an integer n
    // a number is call digitorial if the sum of the factorials of
    // its digits is equal to the number itself
    // determine whether any permutation of n (including the original order) forms
    // a digitorial number
    // return true if such a permutation exists, otherwise return false

    // the factorial of a non negative integer x, denoted as x! is the product of
    // all positive integers less than or equal to x, and 0! = 1

    // a permutation is a rearrangement of all the digits of a number that does not start with zero. Any arrangement starting with zero is invalid

    // so we first need to think whow find the factorial
    // so we can use a loop to calculate the factorial of a num

    // so when we iterate through each digit in the number, we find the factorial
    // for the digit and we sum all the factorials of all the digits and check if
    // sum === num

    // we have to think about permutation
    // we have to find a variation of n such that permutation exists and n is also
    // digitorial

    // for now, let's focus on the original order of n

    const numStr = n.toString();
    let product = 0;
    let isPermutation = true;

    for (let i = 0; i < numStr.length; i++) {
        let currDigit = parseInt(numStr[i]);
        let temp = 1;
        if (currDigit !== 0) {
            for (let j = currDigit; j > 0; j--) {
                temp = temp * j;
            }
        } else {
            isPermutation = false;
        }
        product += temp;
    }

    if (product === n && isPermutation) {
        return true;
    } else {
        return false;
    }

    // now lets think about how to create diff unique variations of n
    // permutation cannot start with zero

    // 145
    // 415
    // 514
    // 541

};