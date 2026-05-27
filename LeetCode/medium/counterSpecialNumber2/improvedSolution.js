var numberOfSpecialChars = function(word) {
    // Nossos "caderninhos" de anotação
    let ultimaMinuscula = {};
    let primeiraMaiuscula = {};

    // Passo 1: Lemos a string APENAS UMA VEZ para anotar as posições
    for (let i = 0; i < word.length; i++) {
        let letra = word[i];
        
        if (letra === letra.toLowerCase()) {
            // Como atualizamos sempre, no final do loop teremos a ÚLTIMA posição
            ultimaMinuscula[letra] = i; 
        } else {
            // Só salvamos se ainda não tiver nada, garantindo que é a PRIMEIRA posição
            if (primeiraMaiuscula[letra] === undefined) {
                primeiraMaiuscula[letra] = i; 
            }
        }
    }

    let special = 0;
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";

    // Passo 2: Só precisamos testar as 26 letras do alfabeto (super rápido!)
    for (let char of alfabeto) {
        let upperChar = char.toUpperCase();
        
        // Verifica se as duas versões foram anotadas
        if (ultimaMinuscula[char] !== undefined && primeiraMaiuscula[upperChar] !== undefined) {
            
            // Aqui entra a sua exata lógica: a minúscula veio antes?
            if (ultimaMinuscula[char] < primeiraMaiuscula[upperChar]) {
                special++;
            }
        }
    }

    return special;
};