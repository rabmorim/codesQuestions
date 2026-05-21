/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    let count = 0;
    let prefix = '';
    let memory = new Set();

    for (let i = 0; i < arr1.length; i++) {
        let str = String(arr1[i]);
        prefix = '';
        for (let j = 0; j < str.length; j++) {
            prefix += str[j]
            memory.add(prefix)
        }
    }


    for (let i = 0; i < arr2.length; i++) {
        let str = String(arr2[i]);
        prefix = '';
        for (let j = 0; j < str.length; j++) {
            prefix += str[j];
            if (memory.has(prefix)) {
                count = Math.max(count, prefix.length);
            }
        }

    }


    return count;
};