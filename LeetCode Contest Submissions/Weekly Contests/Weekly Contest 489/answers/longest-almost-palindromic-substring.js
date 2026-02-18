/* Question Link: */


// Solution 1: in Progress

/**
 * @param {string} s
 * @return {number}
 */
var almostPalindromic = function (s) {
    // i am given a string s consisting of lowercase English letters
    // A substring is almost-palindromc if it becomes a palindrome after removing exactly one character
    // from it
    // a palindrome is a word that reads the same forwards and backwards. for exp - madam
    // i need to return an integer denoting the length of the longest almost-palindromic substring in s

    // example 1: s = "abca"
    // if we remove "c" from "abca" it becomes "aba" which is a palindrome

    // if we move from left to right in the substring and remove an element from the substring and then read the substring again forwards and backwards, we can find if it's almost palindromic
    let len = 0;

    for (let i = 0; i < s.length; i++) {
        let str = "";

        for (let j = 0; j < s.length; j++) {
            if (i != j) {
                str += s[j];
            }
        }

        let reversedStr = str.split('').reverse().join('');
        if (str === reversedStr) {
            len += 1;
        }
    }

};