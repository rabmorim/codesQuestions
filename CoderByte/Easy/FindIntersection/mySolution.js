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
  const str1 = strArr[0];
  const str2 = strArr[1];
  const intersection = [];

  const strArr1 = str1.trim().split(",");
  const strArr2 = str2.trim().split(",");

  for (var i = 0; i < strArr1.length; i++) {
    for (var j = 0; j < strArr2.length; j++) {
      if (strArr1[i] == strArr2[j]) {
        intersection.push(strArr1[i]);
      }
    }
  }
  if (intersection.length !== 0) {
    intersection.sort((a, b) => a - b);
    return intersection.toString();
  } else {
    return "false";
  }
}

// keep this function call here
console.log(FindIntersection(readline()));
