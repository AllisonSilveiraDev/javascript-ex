const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017"; //writable false = nao editavel
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa)); // enumarable significa a listagem true é listado false não é listado

// Object.assign es2015
const dest = { a: 1 };
const o1 = { b: 2 };
const o = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, 02);
/* os paramentros do objetos assign são concatenados
e substituindo os as chaves e valores iguais pelo
ultimo valor passado ,o primieiro paramentro é o objeto
de destino e os outros os objetos a irem para o objeto destinado */

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
