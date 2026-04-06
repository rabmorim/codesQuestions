/*
A Função `FindIntersection(strArr)` 
lê o array de strings armazenado em `strArr`, 
que contém dois elementos: 
o primeiro elemento representa 
uma lista de números separados por vírgulas, 
ordenados em ordem crescente, e o segundo elemento representa uma 
segunda lista de números separados por vírgulas (também ordenados).
O objetivo é retornar uma string separada por vírgulas contendo os números que
ocorrem nos elementos de `strArr` em ordem crescente. Se não houver interseção,
retorne a string `false`.
 */

function FindIntersection(strArr) {
  // 1. Separamos as strings e limpamos os espaços de CADA número usando .map()
  const strArr1 = strArr[0].split(',').map(num => num.trim());
  const strArr2 = strArr[1].split(',').map(num => num.trim());

  // 2. O método .filter() percorre o strArr1. 
  // Para cada 'num', o .includes() verifica se ele existe dentro do strArr2.
  // Isso substitui completamente os seus dois laços "for" e o "if".
  const intersection = strArr1.filter(num => strArr2.includes(num));

  // 3. Verificamos se encontramos algo
  if (intersection.length > 0) {
    // O .join(',') junta o array em uma string separada por vírgula, sem espaços extras.
    return intersection.join(',');
  } else {
    return 'false';
  }
}

// keep this function call here 
console.log(FindIntersection(readline()));