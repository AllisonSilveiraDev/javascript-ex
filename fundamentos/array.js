/* array tem varias formas de ser declarada, os indices são separados por virgula
se inicia sendo o primeiro valor no indice 0*/

const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

// atribui valor ao indice
valores[4] = 10;
console.log(valores);
console.log(valores.length);

//adiciona os paramentros do metodo ao final do array
valores.push({ id: 3 }, false, null, "teste");
console.log(valores);

//retira os ultimo indice do array e seu valor
valores.pop();
console.log(valores);

//array é um objeto
console.log(typeof valores);
