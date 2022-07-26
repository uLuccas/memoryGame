import React from "react";
import { HeaderConteiner } from "./style.ts";

export function Header({ attempts, scoreboard }) {
  return (
    <HeaderConteiner>
      <h1>Memory Game</h1>

      <div>
        <h3>Placar</h3>
        <span>Acertos: {scoreboard}</span> <br />
        <span>Tentativas: {attempts}</span>
      </div>
    </HeaderConteiner>
  );
}
