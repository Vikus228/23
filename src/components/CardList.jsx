import Card from "./Card";
import React from "react";

function CardList() {
    return(
        <React.Fragment>
            <Card
                price={300}
                speed={10}
            />
            <Card
                price={450}
                speed={50}
            />
            <Card
                price={550}
                speed={100}
            />
            <Card
                price={1000}
                speed={200}
            />
        </React.Fragment>
    );
};

export default CardList;