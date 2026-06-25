/*
You are given an integer array nums and an integer target.
Return the number of subarrays of nums in which target is the majority element.
The majority element of a subarray is the element that appears strictly more than half of the times in that subarray.
Example 1:

Input: nums = [1,2,2,3], target = 2

Output: 5

Explanation:

Valid subarrays with target = 2 as the majority element:

nums[1..1] = [2]
nums[2..2] = [2]
nums[1..2] = [2,2]
nums[0..2] = [1,2,2]
nums[1..3] = [2,2,3]
So there are 5 such subarrays.

Example 2:

Input: nums = [1,1,1,1], target = 1

Output: 10

Explanation:

       All 10 subarrays have 1 as the majority element.

Example 3:

Input: nums = [1,2,3], target = 4

Output: 0

Explanation:

target = 4 does not appear in nums at all. Therefore, there cannot be any subarray where 4 is the majority element. Hence the answer is 0.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let pontInit = 0;
    let pontfinal = nums.length;
    let count = 0;
    if (!nums.includes(target)) {
        return count;
    }
    while (pontInit != nums.length) {
        while (pontfinal != 0) {
            let chunck = nums.slice(pontInit, pontfinal);
            let result = checkChunk(chunck, target);
            if (result == true) {
                count++
            }
            pontfinal--;
        }
        pontInit++;
        pontfinal = nums.length;
    }
    return count;
};

function checkChunk(chunck, target) {
    let countTarget = 0;
    for (let i = 0; i < chunck.length; i++) {
        if (chunck[i] == target) {
            countTarget++;
        }
    }
    if (countTarget > (chunck.length / 2)) {
        return true;
    } else {
        return false;
    }
}
