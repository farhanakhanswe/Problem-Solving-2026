// Question Link: https://leetcode.com/problems/sum-of-compatible-numbers-in-range-i/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function(n, k) {
    // i am given two integers n and k
    // a positive integer x is called compatible if it satisfies the conditions
    // return the sum of all compatible integers x

    // thought process
    // abs(n - x) <= k and x >= 1 since it is a positive integer
    // x is atmost k integers away from n
    // lets say n = 10 and k = 3 then x is atmost 3 integers away from 10
    // so the minimum val of x is n - k which is 7 and the max val of x is n + k which is 13
    // min val of x will either be 1 or (n - k) if it is >= 1 

    const min = Math.max(1, n - k);
    const max = n + k;
    let sum = 0;

    for(let i = min ; i <= max; i++){
        if((n & i) === 0){
            sum += i;
        }
    } 

    return sum;
}