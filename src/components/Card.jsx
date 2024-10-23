import './content.css'

function Card(props) {
    let price = props.price;
    let headerColor;
    let bodyColor;
    let cardClass;

    if (price === 300) {
        headerColor = '#00b4d8';
        bodyColor = '#00d5ff';
    } else if  (price === 450) {
        headerColor = '#148f55';
        bodyColor = '#30d689';
    } else if  (price === 550) {
        headerColor = '#b83724';
        bodyColor = '#f7462a';
        cardClass = 'big-card';
    } else if  (price === 1000) {
        headerColor = '#242424';
        bodyColor = '#373737';
    };

    return(
        <div className={`card ${cardClass}`}>
            <div className="card-header" style={{ background: headerColor }}>
                <p className="noMargin">Безлимитный {props.price}</p>
            </div>
            <div className="card-body" style={{ background: bodyColor }}>
                <p className="noMargin left">руб</p>
                <p className="noMargin bigSize">{props.price}</p>
                <p className="noMargin right">/мес</p>
            </div>
            <div className="card-section">
                <p className="noMargin">до {props.speed} Мбит/сек</p>
            </div>
            <div className="card-footer">
                <p className="noMargin">Объем включенного трафика не ограничен</p>
            </div>
        </div>
    );
};

export default Card;