// novo recurso do ES2015

const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};
//desestruturação para extrair os atributos
const { nome, idade } = pessoa;
console.log(nome, idade);
// desestruturação e colocando em variavel os atributos
const { nome: n, idade: i } = pessoa;
console.log(n, i);
// desestruturação em atributos inexistentes no objeto
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);
// desestruturação de atributos aninhados
const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);
