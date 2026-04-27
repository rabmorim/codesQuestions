/*
A função `MinWindowSubstring(strArr)` deve receber como parâmetro um array de strings armazenado em `strArr`, 
que conterá apenas duas strings: a string `N` como primeiro parâmetro e uma string `K` com alguns caracteres. 
O objetivo é determinar a menor substring de `N` que contenha todos os caracteres de `K`. 
Por exemplo: se `strArr` for `["aaabaaddae", "aed"]`, a menor substring de `N` 
que contém os caracteres "a", "e" e "d" é "dae", localizada no final da string. 
Portanto, neste exemplo, o programa deve retornar a string "dae".

Outro exemplo: se `strArr` for `["aabdccdbcacd", "aad"]`, ]
a menor substring de `N` que contém todos os caracteres de `K` é "aabd", 
localizada no início da string. Ambos os parâmetros serão strings com comprimento entre 1 e 50 caracteres, 
e todos os caracteres de `K` estarão presentes em algum lugar na string `N`. 
Ambas as strings conterão apenas letras minúsculas do alfabeto.
 */

function MinWindowSubstring(strArr) {
    const strN = strArr[0];
    const strK = strArr[1];

    // 1. Criamos um "dicionário" (Objeto) contando quantas vezes precisamos de cada letra de K
    const letrasNecessarias = {};
    for (let char of strK) {
        letrasNecessarias[char] = (letrasNecessarias[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let letrasFaltando = strK.length; // Quantidade total de letras que ainda precisamos achar

    let menorTamanho = Infinity; // Começa infinito para que qualquer pedaço seja menor que ele
    let menorInicio = 0;

    // 2. O dedo direito (right) começa a andar pela string N
    while (right < strN.length) {
        const charDireita = strN[right];

        // Se achamos uma letra útil, diminuímos o total de faltantes
        if (letrasNecessarias[charDireita] > 0) {
            letrasFaltando--;
        }

        // Descontamos a letra no dicionário (mesmo que fique negativo, o que significa que temos de sobra)
        if (letrasNecessarias[charDireita] !== undefined) {
            letrasNecessarias[charDireita]--;
        }

        // 3. Atingimos o objetivo! Temos todas as letras dentro da janela.
        // Agora o dedo esquerdo (left) tenta encolher a janela o máximo possível.
        while (letrasFaltando === 0) {

            // Antes de encolher, verificamos se a janela atual é a menor que já vimos
            if (right - left + 1 < menorTamanho) {
                menorTamanho = right - left + 1;
                menorInicio = left;
            }

            const charEsquerda = strN[left];

            // O dedo esquerdo vai dar um passo. Se a letra que ele vai deixar para trás era importante...
            if (letrasNecessarias[charEsquerda] !== undefined) {
                letrasNecessarias[charEsquerda]++; // ...devolvemos ela pro dicionário

                // Se ela voltar a ser maior que 0, significa que a janela quebrou, pois perdemos uma letra essencial
                if (letrasNecessarias[charEsquerda] > 0) {
                    letrasFaltando++;
                }
            }

            // O dedo esquerdo anda (encolhe a janela)
            left++;
        }

        // O dedo direito continua andando (expande a janela de novo)
        right++;
    }

    // 4. Retorna a fatia exata usando apenas as coordenadas que salvamos
    return menorTamanho === Infinity ? "" : strN.slice(menorInicio, menorInicio + menorTamanho);
}