import React from "react";

export default (props) => (
  //<React.Fragment>
  //pode envoler com div ou array
  <>
    <h1>Bom Dia {props.nome}</h1>
    <p>Sua idade é {props.idade}</p>
  </>
);
