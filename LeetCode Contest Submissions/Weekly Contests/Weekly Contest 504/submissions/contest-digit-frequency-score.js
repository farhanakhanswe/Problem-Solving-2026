//  Question Link: https://leetcode.com/problems/digit-frequency-score/
//  The following solution was submitted during contest period.

/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    // im given an integer n
    // the score of n is defined as the sum of d * freq(d) over all distinct digits d,
    // where freq(d) denotes the number of times the digit d appears in n

    // so lets say we are given an int n which is a multi digit number like 1233
    // we can be keep a count of the frequncy for each distinct digit like 1 appears once,
    // 2 appeared once and 3 appeared twice
    // then we calculate the score of n by finding the total sum of d * freq(d) over all distinct
    // digits d

    const str = n.toString();
    const map = new Map(); // key will have the number and value will be its frequency
    let score = 0;

    for(let i = 0 ; i < str.length; i++){
        if(map.has(str[i])){
            score -= ( parseInt(str[i]) * map.get(str[i]) );
            map.set(str[i], map.get(str[i]) + 1);
            score += ( parseInt(str[i]) * map.get(str[i]) );
        }else{
            score += parseInt(str[i]);
            map.set((str[i]), 1);
        }
    }

    return score;
};