import deck from './data/cards.json'
import './App.css'
import { useState, useEffect } from 'react';

interface Card {
  suit: string;
  value: string;
  points: number;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const allCards: Card[] = [];

    deck.forEach((suit) => {
      suit.values.forEach((card) => {
        let newCard = {
          suit: suit.suit,
          value: card.value,
          points: card.points
        }

        allCards.push(newCard);
      })
    })

    setCards(allCards);
  }, [])

  return (
    <>
      <h1>Goldfish</h1>
      {
        cards && cards.map((card) => <p>{card.suit}{card.value}</p>)
      }
    </>
  )
}

export default App
