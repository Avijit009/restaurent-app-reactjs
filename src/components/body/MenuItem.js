import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = ({ dish, onSelectedDish }) => {
  return (
    <div>
      <Card
        inverse
        style={{
          padding: 10,
          margin: 5,
          cursor: 'pointer'
        }}
        onClick={() => onSelectedDish(dish)}
      >
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 270,
            opacity: 0.6,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#000",
            }}
            tag="h5"
          >
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
