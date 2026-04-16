/* 

Faça com que a função `PermutationStep(num)` receba o parâmetro `num` e 

retorne o próximo número maior que `num` usando os mesmos dígitos. 

Por exemplo: se `num` for 123, retorne 132; se for 12453, retorne 12534.

Se um número não tiver permutações maiores, retorne -1 (ou seja, 999).

*/

function PermutationStep(num) {
    const arr = String(num).split('');
    let i = arr.length - 2;

    // Passo 1: Encontrar a quebra (o pivô) da direita para a esquerda
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    // Se o 'i' ficou menor que 0, significa que o número já está na ordem decrescente máxima
    if (i < 0) return -1;

    // Passo 2: Encontrar o substituto da direita para a esquerda
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Passo 3: Trocar o pivô e o substituto de lugar 
    // (Usando desestruturação do JS, sem precisar de splice ou variáveis temporárias)
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // Passo 4: Inverter o que sobrou à direita do pivô
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return Number(arr.join(''));
}

console.log(PermutationStep(12453)); // 12534