/**
 *
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 
Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let lengthChunck = needle.length;
    let index = -1;

    for (let i = 0; i < haystack.length; i++) {
        let chunck = haystack.slice(i, lengthChunck);
        let result = checkStr(chunck, needle);
        if (result === true) {
            index = i;
            return index;
        } else {
            lengthChunck++;
            continue;
        }
    }

    return index;

};

function checkStr(chunck, check) {
    if (chunck === check) {
        return true;
    } else {
        return false;
    }
}
