/* 

Faça com que a função `PermutationStep(num)` receba o parâmetro `num` e 

retorne o próximo número maior que `num` usando os mesmos dígitos. 

Por exemplo: se `num` for 123, retorne 132; se for 12453, retorne 12534.

Se um número não tiver permutações maiores, retorne -1 (ou seja, 999).

*/

function PermutationStep(num){
    const str = num.toString().split('');
    let broken = 0;
    let indexBroken = -1;
    let indexReplace = 0;
    let replaceNumber = 0;

    // Encontra o número que quebra a sequencia
    for(let i = str.length -1 ; i >= 0; i--) {
        if(str[i] < str[i + 1] ){
            broken = str[i]
            indexBroken = i;
            break;
        } 
    }
    // Se não tiver permutações, retorna -1
    if(indexBroken == -1){
            return -1;
        }
    // Encontra o numnero para substituir
    for(let i = str.length -1 ; i >= 0; i--) {
        if(str[i] > broken){
            replaceNumber = str[i];
            indexReplace = i;
            break;
        }
    }
    
    str.splice(indexReplace, 1, broken);
    str.splice(indexBroken, 1, replaceNumber);

    const test = str.slice(indexBroken + 1);

    test.sort((a, b) => a - b);

    const head = str.slice(0, indexBroken + 1);

    const finalArray = head.concat(test);


    return Number(finalArray.join(''));
   
}



console.log(PermutationStep(12453))