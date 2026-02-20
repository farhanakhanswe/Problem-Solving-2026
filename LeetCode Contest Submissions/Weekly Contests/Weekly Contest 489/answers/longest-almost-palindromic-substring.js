/* Question Link: https://leetcode.com/problems/longest-almost-palindromic-substring/ */

// Solution 1: in Progress

/**
 * @param {string} s
 * @return {number}
 */
var almostPalindromic = function (s) {
    // i am given a string s 
    // a substring s almost palindomic if it becomes a palindrome
    // after removing exactly one character from it
    // return an integer denoting the length of the longest almost-
    // palindromic substring in s

    // substring can be the whole string
    // so given the string, we need to find the substring which
    // becomes almost palindromic when i remove only one character
    // from this substring

    // we can break the problem down into two parts
    // first find the almost palindromes
    // then find the longest almost palindrome

    // we have to pick a substring and we know a substring can be the whole string 
    // we can start by traversing the whole string first
    // we can remove one char as we move from left to right and check if
    // the substring reads the same forwards and backwards as that would mean
    // it's palindromic

    // now next challenge is picking a substring that is not the whole
    // string
    // taking example 3 "zzabba"
    // we have to pick "zabba" as the substring no "zzabba" 
    // we if took the "zzabba" as the substring, we have to remove
    // both z to get the palindrome but we are only allowed to remove
    // one character to create an almost palindrome
    // we have to pick "zabba" as the substring

    // lets say the the s is "zzzabba"
    // and we move from left to right
    // if i remove one letter and take the rest to create a substring1
    // zzabba
    // then remove a letter from this substring1 to create another substring2
    // zabba
    // then remove a letter from this substring2 to create another substring3
    // abba
    // looks like we can use recursion for this
    // but lets say the is "zfafbba"
    // the substring should be "afbba". the above approach will not give me that

    // let's say s is "zfzzafbba"
    // the possible substrings could be
    // zfzzafbba
    // fzzafbba
    // zzafbba
    // zafbba
    // afbba
    // zzafbba
    // zbba

    // ....plenty

    // okay so substring must be a continous in the original string. Let's pick str = "abba" 
    // Substring needs to be a "part" of the string so if we do "baba" as substring it's wrong
    // as "baba" is not part of "abba"

    // so we can try to find all the possible substrings using nested loops and then use
    // two pointer techique to find if the substring is a palindrome
    // after removing one char from it

    // let's first create substrings 
    // they must be length of atleast 2

    let longestStr = "";

    for (let i = 0; i < s.length; i++) {
        let newStr = s[i];
        for (let j = i + 1; j < s.length; j++) {
            newStr += s[j];

            let leftPtr = 0;
            let rightPtr = newStr.length - 1;

            // now check if it is almost palindromic
            // we remove one char at a time and see if the str is palindrome
            while (leftPtr < rightPtr) {
                let temp = newStr.split().splice(leftPtr, 1).join();
                let isPalindrome = isPalindrome(temp);

                if (isPalindrome) {
                    longestStr = newStr;
                    leftPtr++;
                }
                leftPtr++;
            }

        }
    }
};

var isPalindrome = function (str) {
    let leftPtr = 0;
    let rightPtr = newStr.length - 1;

    while (leftPtr < rightPtr) {
        let isPalidrome = true;
        if (s[leftPtr] !== s[rightPtr]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}