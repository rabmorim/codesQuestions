/*
Dada uma lista de inteiros nums, retorne uma nova lista resultado em que resultado[i] 
é igual ao produto de todos os elementos de nums, exceto o próprio nums[i].

A solução deve funcionar sem usar a operação de divisão. Uma forma de conseguir isso é combinar, 
para cada posição, o produto de tudo o que está à esquerda dela com o produto de tudo o que está à direita.

Por exemplo, para nums = [1, 2, 3, 4] 
o resultado é [24, 12, 8, 6]: na posição 0 fica 2·3·4 = 24, 
na posição 1 fica 1·3·4 = 12, na posição 2 fica 1·2·4 = 8 e na posição 3 fica 1·2·3 = 6.

Exemplo 1
Argumentos:
[[1,2,3,4]]
Retorno:
[24,12,8,6]
Exemplo 2
Argumentos:
[[-1,1,0,-3,3]]
Retorno:
[0,0,9,0,0]
Exemplo 3
Argumentos:
[[2,3]]
Retorno:
[3,2]
Restrições

1 ≤ nums.length ≤ 10^5
-30 ≤ nums[i] ≤ 30
O produto de qualquer prefixo ou sufixo de nums cabe em um inteiro de 32 bits
Não é permitido usar a operação de divisão
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftArr = [];
        const rightArr = [];
        const result = [];
        let leftCount = 1;
        let rightCount = 1;
        // Esquerda
        for (let i = 0; i < nums.length; i++) {
            leftArr.push(leftCount);
            leftCount = nums[i] * leftCount;
        }
        // Direita
        for (let i = nums.length - 1; i >= 0; i--) {
            rightArr[i] = rightCount;
            rightCount = nums[i] * rightCount;
        }
        for (let i = 0; i < leftArr.length; i++) {
            result.push(rightArr[i] * leftArr[i]);
        }
        return result;
    }
}

