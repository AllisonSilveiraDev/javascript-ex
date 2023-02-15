const escola = "Cod3r";

// retorna a letra do indice indicado no parametro do metodo
console.log(escola.charAt(4));
// retorna vazio pois o indice não foi encontrado
console.log(escola.charAt(5));
//retorna o codigo relacionado a tabela unicode do indice
console.log(escola.charCodeAt(3));
// retorna o valor do indice da string indicado no parametro do metodo
console.log(escola.indexOf(3));
//retorna a instring apartir do indice indicado no parametro do metodo
console.log(escola.substring(1));
// igual o acima porem entre os indices sem incluir o ultimo indice
console.log(escola.substring(0, 3));
// concatena (adidiciona) a string para a string do paramentro do metodo
console.log("Escola ".concat(escola));
console.log("Escola " + escola + "!");
// substitui a letra do indice do paramentro pelo segundo paramentro
console.log(escola.replace(3, "e"));
/* converter string para array dentro do metodo split vai o item que 
separa os itens para formar o array */
console.log("Ana,Maria,Pedro".split(","));
