import React from "react";
import { CardContainer } from "./style.ts";

export function Card({ title }) {
  return (
    <CardContainer>
      <h1>{title}</h1>
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        vitae est voluptatum consequatur neque ad mollitia, eveniet sapiente
        voluptate nisi modi totam itaque reprehenderit facere, facilis
        aspernatur provident fugiat corporis.
      </span>
    </CardContainer>
  );
}
