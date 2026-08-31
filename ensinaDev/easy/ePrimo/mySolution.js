/*
Um número primo é um número inteiro maior que 1 que tem exatamente dois divisores positivos: 1 e ele mesmo.

Implemente uma função que recebe um número inteiro n e retorna true se n for primo, ou false caso contrário.

Números menores que 2, ou seja, 0, 1 e todos os negativos, nunca são primos. O 2 é o único número primo par; qualquer outro número primo é ímpar.

Exemplo 1
Argumentos:
[7]
Retorno:
true
Exemplo 2
Argumentos:
[9]
Retorno:
false
Restrições

-10^9 ≤ n ≤ 10^9
n é sempre um número inteiro
*/

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPrime(n) {
        // sua solução aqui
        if (n < 2 || n < 0) {
            return false;
        }
        if (n === 2 || n === 0) {
            return true;
        }
        const limit = Math.sqrt(n);
        for (let i = 2; i <= limit; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true
    }
}