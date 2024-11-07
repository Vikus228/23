import React from 'react';
import './content.css';

function Card({ price, speed, isSelected, onSelect }) {
  let headerColor;
  let bodyColor;

  if (price === 300) {
    headerColor = '#00b4d8';
    bodyColor = '#00d5ff';
  } else if (price === 450) {
    headerColor = '#148f55';
    bodyColor = '#30d689';
  } else if (price === 550) {
    headerColor = '#b83724';
    bodyColor = '#f7462a';
  } else if (price === 1000) {
    headerColor = '#242424';
    bodyColor = '#373737';
  }

  const handleButtonState = () => {
    onSelect(price);
  };

  return (
    <div className={isSelected ? 'bigCard' : 'card'}>
      <div className="card-header" style={{ background: headerColor }}>
        <p className="noMargin">Безлимитный {price}</p>
      </div>
      <div className="card-body" style={{ background: bodyColor }}>
        <p className="noMargin left">руб</p>
        <p className="noMargin bigSize">{price}</p>
        <p className="noMargin right">/мес</p>
      </div>
      <div className="card-section">
        <p className="noMargin">до {speed} Мбит/сек</p>
      </div>
      <div className="card-footer">
        <p className="noMargin">Объем включенного трафика не ограничен</p>
      </div>
      <button onClick={handleButtonState}>Выбрать</button>
    </div>
  );
}

export default Card;