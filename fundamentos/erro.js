function tratarErroELancar(erro) {
  // throw new Error("error!! ...");
  // throw 10;
  // throw true;
  // throw "mensagem de erro";
  throw {
    name: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("finalmente ");
  }
}

const obj = { nome: "Roberto" };
imprimirNomeGritado(obj);
