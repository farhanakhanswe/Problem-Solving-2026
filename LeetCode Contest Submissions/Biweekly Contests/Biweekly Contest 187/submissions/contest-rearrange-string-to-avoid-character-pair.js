// Question Link: https://leetcode.com/problems/rearrange-string-to-avoid-character-pair/
// The following solution was submitted during contest period.

/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function(s, x, y) {
    // i am given a string s and two distinct letters x an y
    // i have to rearrange the characters of s to construct a new str t
    // t is a rearrangement of all the chars of s
    // every occurence of y appears before every occurence of x in t
    // so if x and y belongs to s, if either  dont exist in s then we return s
    
    // if y doesn't exist in the first char of the str, we can move y value to first index
    // and move the first char to y's old index

    // if y exists in the first char of the s, then we return s
    // this will not work because x and y can appear multiple times

    // i can do another thing, i can create a new string will not have m until the very end
    const sArr = [...s];
    let xStr = "";
    let str = "";
    
    for(let i = 0; i < sArr.length ; i++){
        if(sArr[i] !== x){
            str += sArr[i];
            continue;
        }
        xStr += x;
    }
        
    str += xStr;

    return str;
};