import React, { useEffect, useState } from "react";
import { CardContainer, CardContainerNotVisible, Image } from "./style.ts";

import backgroud from "../../assets/denis.jpeg";

export function Card({
  id,
  title,
  cilindrada,
  setSelectedCard,
  selectedCard,
  img,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  function handleSelectCard(id) {
    setSelectedCard((oldState) => [...oldState, id]);
    setIsVisible(true);
  }

  useEffect(() => {
    if (selectedCard.length === 2) {
      setEnabled(false);
      setTimeout(() => {
        setIsVisible(false);
        setEnabled(true);
      }, 2000);
    }
  }, [selectedCard]);

  return (
    <>
      {!isVisible ? (
        <CardContainerNotVisible
          onClick={() => enabled && handleSelectCard(id)}
        >
          <img src={backgroud} alt="Background card" />
        </CardContainerNotVisible>
      ) : (
        <CardContainer>
          <h1>{title}</h1>
          <span>Cilindradas: {cilindrada}</span>
          <Image src={img} />
        </CardContainer>
      )}
    </>
  );
}
