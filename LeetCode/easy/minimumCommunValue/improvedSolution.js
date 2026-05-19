/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i = 0; // Ponteiro para nums1
    let j = 0; // Ponteiro para nums2

    // O loop continua enquanto nenhum dos ponteiros sair do limite dos arrays
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i]; // Achou o menor em comum
        } else if (nums1[i] < nums2[j]) {
            i++; // O número no nums1 é menor, avança para tentar um maior
        } else {
            j++; // O número no nums2 é menor, avança para tentar um maior
        }
    }

    // Se saiu do loop, é porque não encontrou nenhum igual
    return -1;
};