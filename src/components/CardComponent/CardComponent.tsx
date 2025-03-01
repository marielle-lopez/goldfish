import type Card from "../../models/card"

const CardComponent = ( { card }: { card: Card } ) => {
    const styling = [
        "bg-zinc-950",
        "border",
        "border-zinc-700",
        "rounded-xl",
        "w-24",
        "h-32",
        "content-center",
    ]

    return <div className={styling.join(" ")}>
        <p>{card.suit} {card.value}</p>
    </div>
}

export default CardComponent