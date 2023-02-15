// concatenacao não pode quebrar a linha
const nome = "Rebeca";
const concatenacao = "Olá " + nome + " !";

/* mais simples e pode ter varias linhas 
pode ser chamada uma função dentro de template string*/
const template = `
Olá
${nome} !
`;
console.log(concatenacao, template);

const up = (texto) => texto.toUpperCase();
console.log(`Ei fulano...${up("cuidado")}!`);
