/*
A funÃ§Ã£o `QuestionMarks(str)` deve receber como parÃ¢metro uma string `str` 
contendo nÃºmeros de um dÃ­gito, letras e pontos de interrogaÃ§Ã£o, 
e verificar se existem exatamente 3 pontos de interrogaÃ§Ã£o entre 
cada par de nÃºmeros cuja soma seja 10. Se existirem, 
o programa deve retornar a string `true`; caso contrÃ¡rio, deve retornar `false`. 
Se nÃ£o houver nenhum par de nÃºmeros cuja soma seja 10 na string, 
o programa tambÃ©m deve retornar `false`.

Por exemplo: se `str` for "arrb6???4xxbl5???eee5", 
o programa deve retornar `true`,
pois existem exatamente 3 pontos de interrogaÃ§Ã£o entre 6 e 4, e 3 pontos de interrogaÃ§Ã£o 
entre 5 e 5 no final da string.
 */

function QuestionsMarks(str) {
  // NÃºmero de ? dentro da string
  const separator = str.split("?").length - 1;
  const indexes = [];
  let valid = false;

  if (separator < 3) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      indexes.push({
        index: i,
        value: Number(str[i]),
      });
    }
  }

  for (let i = 0; i < indexes.length - 1; i++) {
    if (indexes[i].value + indexes[i + 1].value == 10) {
      const subStr = str.slice(indexes[i].index, indexes[i + 1].index);
      if (subStr.split("?").length - 1 == 3) {
        valid = true;
      } else {
        valid = false;
        break;
      }
    }
  }

  // code goes here
  return valid;
}

// keep this function call here
console.log(QuestionsMarks(readline()));
