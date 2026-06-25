/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function (nums, target) {
    let count = 0;

    // Se o array sequer tem o target, já paramos por aqui (ótima sacada sua!)
    if (!nums.includes(target)) {
        return 0;
    }

    // O loop externo define onde o subarray começa
    for (let i = 0; i < nums.length; i++) {
        let countTarget = 0;

        // O loop interno expande o subarray a partir de 'i'
        for (let j = i; j < nums.length; j++) {

            // Verificamos o elemento atual que acabou de entrar no subarray
            if (nums[j] === target) {
                countTarget++;
            }

            // Calculamos o tamanho atual do subarray
            let currentLength = j - i + 1;

            // Verificamos se o target é maioria nesse pedaço específico
            if (countTarget > currentLength / 2) {
                count++;
            }
        }
    }

    return count;
};