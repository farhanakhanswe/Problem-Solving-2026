// Question Link: https://leetcode.com/problems/check-good-integer/

/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    const str = n.toString();
    let digitSum = 0;
    let squareSum = 0;

    for(let i = 0; i < str.length ; i++){
        let num = parseInt(str[i]);
        digitSum += num;
        squareSum += Math.pow(num, 2);
    }

    return squareSum - digitSum >= 50 ? true : false;

};