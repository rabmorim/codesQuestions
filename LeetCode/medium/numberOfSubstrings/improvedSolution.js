/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;
    // Armazenamos a última posição vista de cada letra.
    // Começamos com -1 para indicar que ainda não as vimos.
    let lastSeen = { a: -1, b: -1, c: -1 };

    for (let i = 0; i < s.length; i++) {
        // Atualizamos a posição da letra atual
        let char = s[i];
        lastSeen[char] = i;

        // Se já vimos as 3 letras pelo menos uma vez
        if (lastSeen.a !== -1 && lastSeen.b !== -1 && lastSeen.c !== -1) {
            // Pegamos o índice da letra mais antiga (o menor índice)
            let minIndex = Math.min(lastSeen.a, lastSeen.b, lastSeen.c);
            
            // Todas as substrings que começam do índice 0 até o 'minIndex' 
            // e terminam no 'i' atual são válidas.
            count += minIndex + 1;
        }
    }

    return count;
};