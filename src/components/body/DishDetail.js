import React from "react";

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetail = ({ dish }) => {
  return (
    <div>
      <Card className="my-2">
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 180,
          }}
          top
          width="100%"
        />
        <CardBody
          style={{
            textAlign: "left",
          }}
        >
          <CardTitle
            tag="h5"
            style={{
              fontWeight: "bold",
            }}
          >
            {dish.name}
          </CardTitle>

          <CardText>{dish.description}</CardText>

          <CardText
            style={{
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            Price: {dish.price}/-
          </CardText>

          <hr />

            <LoadComments comments={dish.comments}/>

        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
