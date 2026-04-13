/*
No arquivo JavaScript, você tem um programa que realiza uma requisição GET na rota especificada. 
O retorno contém uma chave chamada data, cujo valor é uma string gigante no 
formato: key=STRING, age=INTEGER, key=STRING, age=INTEGER...
Seu objetivo:

Extrair apenas os IDs (os valores das chaves key).

Popular um array chamado keyArray apenas com esses IDs.

Imprimir no console os IDs que estão entre os índices 10 e 15 (inclusive).

O resultado deve ser uma única string separada por vírgulas (ex: ID1,ID2,ID3...
*/

function getString() {
  const exampleUrl = "https://coderbyte.com/api/challenges/json/age-counting";

  fetch(exampleUrl)
    .then((response) => response.json())
    .then((json) => {
      const keyArray = [];

      // Resultado da API
      const data = json.data;

      // Usar um regex para descobrir os valores key
      const match = data.match(/key=([a-zA-Z0-9]+)/g);

      // Pegar apenas os valores de key, tirando a chave
      keyArray = match.map((item) => item.split("=")[1]);

      const filterKey = keyArray.slice(10, 16);

      // Imprimir o resultado separado por virgula
      console.log(filterKey.join(","));
    });
}
