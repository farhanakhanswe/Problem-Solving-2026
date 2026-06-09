// Question Link: https://leetcode.com/problems/valid-binary-strings-with-cost-limit/

/**
 * @param {number} n
 * @param {number} k
 * @return {string[]}
 */
var generateValidStrings = function(n, k) {
    const result = [];

    function dfs(index, current, cost, prevOne) {
        if (index === n) {
            result.push(current);
            return;
        }

        dfs(index + 1, current + "0", cost, false);

        if (!prevOne && cost + index <= k) {
            dfs(index + 1, current + "1", cost + index, true);
        }
    }

    dfs(0, "", 0, false);
    return result;
};