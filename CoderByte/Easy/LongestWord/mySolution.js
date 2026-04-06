/*A funÃ§Ã£o `LongestWord(sen)` recebe o parÃ¢metro `sen` 
como argumento e retorna a palavra mais longa na string. 
Se houver duas ou mais palavras com o mesmo comprimento, 
retorne a primeira palavra da string com esse comprimento. 
Ignore a pontuaÃ§Ã£o e assuma que `sen` nÃ£o estarÃ¡ vazio. 
As palavras tambÃ©m podem conter nÃºmeros, por exemplo, "Hello world123 567". */

function LongestWord(sen) {
  let words = sen.trim().split(/\s+/);
  let controller = "";
  words.forEach((subString) => {
    let count = 0;
    if (subString.length == controller.length) {
      return;
    } else {
      if (subString.length > count) {
        count = subString.length;
        controller = subString;
      }
    }
  });

  return controller;
}

// keep this function call here
console.log(LongestWord(readline()));
