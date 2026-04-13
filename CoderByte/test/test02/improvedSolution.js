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

  // O JSON.parse lê a string '["A", "B"]' e devolve um array limpo ["A", "B"]
  const arrayLimpo = JSON.parse(strArr);

  for (let i = 0; i < arrayLimpo[0].length; i++) {
    if (arrayLimpo[0][i] !== arrayLimpo[1][i]) {
      count++;
    }
  }

  return count;
}

console.log(HDistance(`["10011", "10100"]`));
