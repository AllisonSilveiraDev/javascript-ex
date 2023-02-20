let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1;
console.log(num1);

console.log(++num1 === num2--); //decremento do num2 só é lido depois da verificação
console.log(num1 === num2);
