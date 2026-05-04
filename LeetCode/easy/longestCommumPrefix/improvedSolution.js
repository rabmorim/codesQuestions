/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
 */

// Não é de fato uma solução mais rápida que a minha, mas é mais elegante e fácil de entender.
var longestCommonPrefix = function (strs) {
    // Verificação de segurança (Se a lista vier vazia, retorna vazio)
    if (strs.length === 0) return "";

    // Pegamos a primeira palavra inteira para ser o nosso prefixo base
    let prefix = strs[0];

    for (let j = 1; j < strs.length; j++) {
        // O método .indexOf() verifica se uma palavra COMEÇA com aquele pedaço.
        // Enquanto a palavra atual NÃO começar com o nosso prefixo...
        while (strs[j].indexOf(prefix) !== 0) {

            // ...nós cortamos a última letra do prefixo (ex: "flor" vira "flo")
            prefix = prefix.substring(0, prefix.length - 1);

            // Se cortamos tanto que o prefixo sumiu, é porque não tem nada em comum.
            if (prefix === "") return "";
        }
    }

    return prefix;
};