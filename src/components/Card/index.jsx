import React from "react";
import { CardContainer } from "./style.ts";

export function Card({ title, cilindrada, id, selected }) {
  function handleSelectCard(id) {
    console.log("dentro da funcao", id);
    selected((oldState) => [...oldState, id]);
  }

  return (
    <CardContainer onClick={() => handleSelectCard(id)}>
      <h1>{title}</h1>
      <span>{cilindrada}</span>
    </CardContainer>
  );
}
