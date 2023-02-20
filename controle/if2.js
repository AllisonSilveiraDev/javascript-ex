function teste1(num) {
  //em caso de apenas uma condição não é necessario
  //as chaves pra criar bloco porém se houver mais de uma
  // irá executar apenas uma condição e a outra não fará parte do bloco
  if (num > 7) console.log(num);
  console.log("final");
}

teste1(6);
teste1(8);

function teste2(num) {
  //cuidado com o ; não usar em estrutura de controle
  if (num > 7);
  {
    console.log(num);
  }
}
