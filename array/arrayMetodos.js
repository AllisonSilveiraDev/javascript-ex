const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); //retira o ultimo item do array
console.log(pilotos);

pilotos.push("Verstappen"); // adiciona ao final do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro item do array
console.log(pilotos);

pilotos.unshift("Hamilton"); //coloca o item no inicio do array
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar

// primeiro paramentro é o indice qual vai ser adicionado ou removido
// segundo parametro é o item a ser removido
// restante dos parametros é oque sera adicionada ao array
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//remover
//primeiro paramentro o indice apartir que sera removido ou adicionado
// segundo parametro quantidade que sera removida ou adicionada
pilotos.splice(3, 1);
console.log(pilotos);

//retorna um novo array apartir do indice passado como paramentro
const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

//retorna um novo array apartir do indice passado como paramentro
// o segundo paramentro e onde o novo array para no caso antes do indice 4
//slice retorna a parte de um array em um novo array
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
