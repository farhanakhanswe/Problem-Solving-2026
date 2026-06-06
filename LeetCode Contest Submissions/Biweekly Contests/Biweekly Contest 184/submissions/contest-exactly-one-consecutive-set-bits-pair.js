// Question Link: https://leetcode.com/problems/exactly-one-consecutive-set-bits-pair/
// The following solution was posted during contest period.

/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function(n) {
    // i am given an integer n
    // return true if its binary representation contains exactly one pair of consecutive set bits,
    // and false otherwise
    // the set bits in an integer are the 1's present when it is written in binary

    const str = n.toString(2);
    let pairCount = 0;

    for(let i = 0 ; i < str.length; i++){
        if(str[i] === "1" && str[i + 1] === "1"){
            pairCount++;
        }
    }
    
    return pairCount === 1 ? true : false;
};