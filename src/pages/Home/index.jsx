import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { HomeContainer, AreaWrapper, Button } from "./style.ts";

import xj from "../../assets/xj6.png";
import fan from "../../assets/fan160.png";
import titan from "../../assets/titan160.png";
import cbr from "../../assets/cbr600.png";
import cbrMil from "../../assets/cbr1000rr.png";
import hornet from "../../assets/hornet600.png";
import tiger from "../../assets/tiger.png";
import xre from "../../assets/xre300.png";

let data = [
  { value: 1, name: "XJ6", cilindrada: 600, img: xj },
  {
    value: 2,
    name: "Fan 160",
    cilindrada: 160,
    img: fan,
  },
  {
    value: 3,
    name: "Titan 160",
    cilindrada: 160,
    img: titan,
  },
  {
    value: 4,
    name: "CBR 600 RR",
    cilindrada: 600,
    img: cbr,
  },
  {
    value: 5,
    name: "CBR 1000 RR",
    cilindrada: 1000,
    img: cbrMil,
  },
  {
    value: 6,
    name: "Hornet 600",
    cilindrada: 600,
    img: hornet,
  },
  {
    value: 7,
    name: "Tiger 900 GT",
    cilindrada: 900,
    img: tiger,
  },
  {
    value: 8,
    name: "XRE 300 Rally",
    cilindrada: 300,
    img: xre,
  },
];

export function Home() {
  const [showCards, setShowCards] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [scoreboard, setScoreboard] = useState(0);
  const [attempts, setAttempts] = useState(0);

  function handleCheckCards(array) {
    // let newData = data;
    if (array[0] === array[1]) {
      setTimeout(() => {
        let newArray = cards.filter((item) => item.value !== array[0]);
        // newData = newArray;
        setCards(newArray);
        setSelectedCard([]);
        setScoreboard(scoreboard + 1);
      }, 2000);
    } else {
      setAttempts(attempts + 1);
      setSelectedCard([]);
    }
  }

  function handleStartGame() {
    setShowCards(true);
    setCards(data.concat(data));
    setAttempts(0);
    setScoreboard(0);
  }

  useEffect(() => {
    if (selectedCard.length === 2) {
      handleCheckCards(selectedCard);
    }
  }, [selectedCard]);

  return (
    <HomeContainer>
      <Header scoreboard={scoreboard} attempts={attempts} />

      <Button onClick={() => handleStartGame()}>Começar!</Button>
      <AreaWrapper>
        {showCards &&
          cards.map((item, idx) => (
            <Card
              key={idx}
              title={item.name}
              cilindrada={item.cilindrada}
              id={item.value}
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              img={item.img}
            />
          ))}
      </AreaWrapper>
    </HomeContainer>
  );
}
