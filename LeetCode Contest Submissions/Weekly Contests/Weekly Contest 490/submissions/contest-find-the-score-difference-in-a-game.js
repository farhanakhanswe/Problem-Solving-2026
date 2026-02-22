/* Question Link: https://leetcode.com/problems/find-the-score-difference-in-a-game/description/ 
   The following solution was submitted during the contest period.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var scoreDifference = function (nums) {
    // i am given an integer array nums, where nums[i] represents the points
    // scored in the ith game
    // there are EXACTLY two players
    // INITIALLY, the first player is ACTIVE and the second player is INACTIVE
    // the following rules apply sequentially for each game i:
    // if nums[i] is odd, the active and inactive players swap roles
    // in every 6th game (that is, game indices 5,11,17,..), the active and inactive
    // players swap roles
    // the active player plays the ith game and gains nums[i] points
    // return the score diff, defined as the first player's TOTAL SCORE minus
    // the second player's total score

    // so two players
    // firstplayer = active
    // secondplayer = inactive

    // the players swap roles when:
    // nums[i] is odd
    // in every 6th game

    // the active player plays the ith game and gains num[i] points

    // score diff = firstplayer's total score - secondplayer's total score

    // so before even iterating the nums arr
    // isActivePlayer = firstplayer

    // as we traverse the arr, and hit the first odd number, firstplayer becomes inactive
    // second player becomes active and second player gets the points

    // and every 6th game is related to iteration number

    // so we traverse the arr and keep two checks
    // if the iteration % 6 === 0 then we swap
    // if num[i]%2 !== 0 then we swap
    // and we keep track of each player's score

    let activePlayer = 1 // 1 means 1st player, 2 means 2nd player
    let firstPlayerScore = 0;
    let secondPlayerScore = 0;

    for (let i = 0; i < nums.length; i++) {
        {
            if (nums[i] % 2 !== 0) {
                if (activePlayer === 1) {
                    activePlayer = 2
                } else {
                    activePlayer = 1
                }
            }

            let temp = i + 1;
            if (temp % 6 === 0) {
                if (activePlayer === 1) {
                    activePlayer = 2
                } else {
                    activePlayer = 1
                }
            }

            if (activePlayer === 1) {
                firstPlayerScore += nums[i]
            } else {
                secondPlayerScore += nums[i]
            }
        }
    }

    return firstPlayerScore - secondPlayerScore;
};