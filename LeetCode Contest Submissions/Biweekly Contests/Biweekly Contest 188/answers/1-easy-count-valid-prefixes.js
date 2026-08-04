// Link: https://leetcode.com/problems/count-valid-prefixes/description/

/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function(s) {

/* Thought process:
   If string is 01 or 10, in both cases, 0 appears 1 time and 1 appears 1 time. Difference between count of 1 and 0 is 0
   If string is 101 or 010, in both cases, the difference between count of 0 and count of 1 is 1
   If string is 1010 or 0101, in both cases, the difference between count of 0 and count 1 is 0
   A string can be rearranged into an alternating string if the absolute difference between the counts of '0' and '1' is at most 1.
*/
 // Solution (A) Time Complexity: O(n) && Space Complexity: O(1)
    let countOf0 = 0;
    let countOf1 = 0;
    let validPrefixesCount = 0;

    for(let i = 0 ; i < s.length; i++){
        if(s[i] === "0") countOf0++;
        if(s[i] === "1") countOf1++;

        if(Math.abs(countOf0 - countOf1) <= 1) validPrefixesCount++;
    }

    return validPrefixesCount;

 // Solution (B) Time Complexity: O(n^2) && Space Complexity: O(n)
 
    var countValidPrefixes = function(s) {

        let str = "";
        let count = 0;
        
        for(let i = 0; i < s.length; i++){
            str += s[i];

            if(strCanBeAlternate(str)){
                count++;
            }
        }

        return count;
        
    };

    var strCanBeAlternate = function(s) {

        let countOf0 = 0;
        let countOf1 = 0;

        for(let i = 0 ; i < s.length; i++){
            if(s[i] === "0"){
                countOf0++;
            }else if(s[i] === "1"){
                countOf1++;
            }
        }

        return Math.abs(countOf0 - countOf1) <= 1;
    }

};

