/*
A função `HDistance(strArr)` deve receber o array de strings armazenado em `strArr`, 
que conterá apenas duas strings de mesmo comprimento,
e retornar o número de caracteres em cada posição que são diferentes entre elas. 
Por exemplo: se `strArr` for `["house", "hours"]`, seu programa deve retornar 2. 
As strings sempre terão o mesmo comprimento e conterão apenas letras minúsculas do alfabeto e números.

Exemplos:
Entrada: `["10011", "10100"]`
Saída: 3
Entrada: `["abcdef", "defabc"]`
Saída: 6
*/

function HDistance(strArr) {
    let count = 0;
    const regex = /[^a-z0-9]/g;
    const newArray = strArr.split(',');

    const clearArray = newArray.map((item) => {
        return item.replace(regex, '');
    })

    for(let i = 0; i < clearArray[0].length; i++){
        if(clearArray[0][i] !== clearArray[1][i]){
            count++;
        }
    }
    
    return count;
}


console.log(HDistance(`["abcdef", "defabc"]`));