import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { HomeContainer, AreaWrapper } from "./style.ts";

let data = [
  { value: 1, name: "Cg 150 Carburada", cilindrada: 150 },
  { value: 2, name: "Fan 160", cilindrada: 160 },
  { value: 3, name: "Titan 160", cilindrada: 160 },
  { value: 1, name: "Cg 150 Carburada", cilindrada: 150 },
  { value: 2, name: "Fan 160", cilindrada: 160 },
  { value: 3, name: "Titan 160", cilindrada: 160 },
];

export function Home() {
  const [showCards, setShowCards] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);

  function handleCheckCards(array) {
    if (array[0] === array[1]) {
      let newArray = data.filter((item) => item.value !== array[0]);
      data = newArray;
      setCards(newArray);
      setSelectedCard([]);
    } else {
      setSelectedCard([]);
    }
  }

  useEffect(() => {
    if (selectedCard.length === 2) {
      handleCheckCards(selectedCard);
    }
  }, [selectedCard]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <HomeContainer>
      <Header />

      <button onClick={() => setShowCards(!showCards)}>Começar!</button>

      <AreaWrapper>
        {showCards &&
          cards.map((item, idx) => (
            <Card
              key={idx}
              title={item.name}
              cilindrada={item.cilindrada}
              id={item.value}
              selected={setSelectedCard}
            />
          ))}
      </AreaWrapper>
    </HomeContainer>
  );
}
