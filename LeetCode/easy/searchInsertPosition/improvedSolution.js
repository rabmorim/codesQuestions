/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let esquerda = 0;
    let direita = nums.length - 1;

    // Enquanto os ponteiros não se cruzarem
    while (esquerda <= direita) {
        // Encontra o índice do meio (arredondando para baixo)
        let meio = Math.floor((esquerda + direita) / 2);

        if (nums[meio] === target) {
            // Achou o número! Retorna o índice na hora.
            return meio;
        } else if (nums[meio] < target) {
            // O alvo é maior, então com certeza está do lado direito.
            // Movemos a fronteira esquerda para ignorar a metade inútil.
            esquerda = meio + 1;
        } else {
            // O alvo é menor, está do lado esquerdo.
            // Movemos a fronteira direita.
            direita = meio - 1;
        }
    }

    // A MÁGICA: Se o loop terminar e não achar o número, os ponteiros se cruzaram.
    // O ponteiro 'esquerda' sempre vai parar exatamente no índice onde 
    // o número deveria ser inserido para manter a ordem.
    return esquerda;
};