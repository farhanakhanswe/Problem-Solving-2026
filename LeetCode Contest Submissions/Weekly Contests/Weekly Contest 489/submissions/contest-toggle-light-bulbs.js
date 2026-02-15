// Question Link: https://leetcode.com/problems/toggle-light-bulbs/
// The following solution was submitted during the contest period.
/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function (bulbs) {
    // i am given an array bulbs of integers between 1 and 100
    // there are 100 light bulbs numbered from 1 to 100. All of them are switched off initially
    // for each bulbs[i] in the array bulbs:
    // if the bulbs[i]th light bulb is curently off, switch it on
    // otherwise switch it off
    // return the list of integers denoting the light bulbs that are on in the end, sorted in
    // asc order. if no bulb is on, return an empty list

    // how do we know which bulb is switched on
    // oh so we can think of the bulb like a switch
    // the ques says that initially all bulbs are off
    // so the first the number appears, it will mean we will switch it on
    // so the second time the number appears, it will mean will switch it off
    // the third time the same number appears, it will mean we will switch it on again

    // okay we can create a map for each bulb and store the value, the value is 0 if off and 1 if on

    let bulbMap = new Map();

    for (let i = 0; i < bulbs.length; i++) {
        if (bulbMap.has(bulbs[i])) {
            if (bulbMap.get(bulbs[i]) === 1) {
                bulbMap.set(bulbs[i], 0);
            } else {
                bulbMap.set(bulbs[i], 1);
            }
        } else {
            bulbMap.set(bulbs[i], 1);
        }
    }

    // lets loop over the map to find keys with values 1 as that would mean it is switched on
    let result = [];

    for (const [key, value] of bulbMap) {
        if (value === 1) {
            result.push(key);
        }
    }

    return result.sort((a, b) => (a - b));


};