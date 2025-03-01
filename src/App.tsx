import deck from './data/cards.json'
import './App.css'
import { useState, useEffect } from 'react'
import CardModel from './models/card'
import CardComponent from './components/CardComponent/CardComponent';


function App() {
  const [cards, setCards] = useState<CardModel[]>([]);

  const styling: string[] = [
    "grid",
    "grid-cols-9",
    "grid-rows-6",
    "gap-4",
    "justify-center",
    "p-4",
  ]

  useEffect(() => {
    const allCards: CardModel[] = [];

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
      <div className={styling.join(" ")}>
        {
          cards && cards.map((card) => <CardComponent key={card.suit + card.value} card={card} />)
        }
      </div>
    </>
  )
}

export default App