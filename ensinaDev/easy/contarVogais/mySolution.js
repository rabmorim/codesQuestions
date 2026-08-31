/*
Dada uma string s, conte quantas vogais ela contém. São vogais as letras a, e, i, o, u, tanto maiúsculas quanto minúsculas.

Implemente o método countVowels, que recebe s e retorna um número inteiro com o total de vogais encontradas. 
Espaços, dígitos, pontuação e consoantes (incluindo y) não entram na contagem.

Exemplo 1
Argumentos:
["Hello World"]
Retorno:
3
Exemplo 2
Argumentos:
["AEIOU"]
Retorno:
5
Restrições

0 ≤ s.length ≤ 10^4
s pode conter letras maiúsculas, minúsculas, espaços, dígitos e sinais de pontuação
considera-se vogal apenas a, e, i, o, u, em qualquer combinação de maiúscula ou minúscula 
*/
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countVowels(s) {
        const regex = /[aeiouAEIOU]/;
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (regex.test(s[i])) {
                count++;
            }
        }
        return count;
    }
}
