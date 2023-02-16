//função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3); //correto
imprimirSoma(2); // 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7); //ignora os numeros restantes após os paramentros
imprimirSoma(); // undefined + undefined = NaN

//função com retorno
//b = 0 numero pardão caso o numero não seja passado para o paramentro
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3)); //correto
