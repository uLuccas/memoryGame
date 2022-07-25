import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { HomeContainer, AreaWrapper } from "./style.ts";

export function Home() {
  const [showCards, setShowCards] = useState(false);

  return (
    <HomeContainer>
      <Header />

      <button onClick={() => setShowCards(!showCards)}>Clica ae</button>

      <AreaWrapper>
        {showCards && (
          <>
            <Card title="Card um" />
            <Card title="card Dois" />
            <Card title="Card Tres" />
            <Card title="Card Quatro" />
          </>
        )}
      </AreaWrapper>
    </HomeContainer>
  );
}
