function QuestionsMarks(str) {
  let valid = false; // Começamos assumindo que não há par válido
  let ultimoNumero = null; // Memória para o último número visto
  let posicaoDoUltimo = -1; // Memória para a posição desse último número

  // Um único laço percorrendo a string do início ao fim
  for (let i = 0; i < str.length; i++) {
    
    // Usamos parseInt para ter certeza que é um número (evita problemas com espaços em branco que !isNaN pode deixar passar)
    const numAtual = parseInt(str[i], 10);

    // Se o caractere atual for de fato um número
    if (!isNaN(numAtual)) {
      
      // Verifica se já temos algum número guardado na memória para poder somar
      if (ultimoNumero !== null) {
        
        // Faz a verificação da regra principal: a soma dá 10?
        if (ultimoNumero + numAtual === 10) {
          
          // Recorta a string EXATAMENTE entre a posição do último número e o atual
          const subStr = str.slice(posicaoDoUltimo + 1, i);
          
          // Conta as interrogações no recorte
          const qtdInterrogacoes = subStr.split('?').length - 1;

          // A REGRA DA ELIMINAÇÃO IMEDIATA:
          // Soma deu 10, mas não tem 3 interrogações? Retorna false e encerra o programa na hora.
          if (qtdInterrogacoes !== 3) {
            return false;
          }
          
          // Se não caiu no if acima, é porque a soma é 10 e tem 3 interrogações.
          // Sinalizamos que encontramos um par válido.
          valid = true;
        }
      }

      // Independentemente de a soma ter dado 10 ou não, 
      // o número atual passa a ser o "último número visto" para a próxima rodada do loop.
      ultimoNumero = numAtual;
      posicaoDoUltimo = i;
    }
  }

  // Se o laço terminou sem dar "return false" no meio do caminho, 
  // retornamos o que sobrou na variável valid.
  return valid;
}

// keep this function call here 
console.log(QuestionsMarks(readline()));