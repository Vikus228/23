import React, { useState } from 'react';
import Card from './Card';

function CardList() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardSelect = (price) => {
    setSelectedCard(price === selectedCard ? null : price);
    };

    const cards = [
    { price: 300, speed: 10 },
    { price: 450, speed: 50 },
    { price: 550, speed: 100 },
    { price: 1000, speed: 200 },
    ];

    return (
    <React.Fragment>
        {cards.map((card) => (
        <Card
            key={card.price}
            price={card.price}
            speed={card.speed}
            isSelected={card.price === selectedCard}
            onSelect={handleCardSelect}
        />
        ))}
    </React.Fragment>
    );
}

export default CardList;