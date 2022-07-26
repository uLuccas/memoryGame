import React, { useEffect, useState } from "react";
import { CardContainer, CardContainerNotVisible, Image } from "./style.ts";

import backgroud from "../../assets/denis.jpeg";

export function Card({
  title,
  cilindrada,
  id,
  setSelectedCard,
  selectedCard,
  img,
}) {
  const [isVisible, setIsVisible] = useState(false);

  function handleSelectCard(id) {
    setSelectedCard((oldState) => [...oldState, id]);
    setIsVisible(true);
  }

  useEffect(() => {
    if (selectedCard.length === 2) {
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [selectedCard]);

  if (!isVisible) {
    return (
      <CardContainerNotVisible onClick={() => handleSelectCard(id)}>
        <img src={backgroud} alt="Background card" />
      </CardContainerNotVisible>
    );
  } else {
    return (
      <CardContainer onClick={() => handleSelectCard(id)}>
        <h1>{title}</h1>
        <span>Cilindradas: {cilindrada}</span>
        <Image src={img} />
      </CardContainer>
    );
  }
}
