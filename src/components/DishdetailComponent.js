/*import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(dish) {
    if (dish != null && dish.comments != null) {
      const cmnts = dish.comments.map((review) => {
        return (
          <div key={review.id}>
            <ul className="list-unstyled">
              <li className="list-item">{review.comment}</li>
              <br />
              <li className="list-item">
                --{review.author},
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(review.date)))}
              </li>
            </ul>
            <br />
          </div>
        );
      });
      return (
        <div>
          <h4> Comments </h4>
          <ul className="list-unstyled">{cmnts}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;
*/

import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const  DishDetail = (props) => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
        </div>
    </div>
    </div>
  )
}

function RenderDish(props) {
  if (props.dish != null) {
    return (
      <Card>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}


function RenderComments(props) {
    if (props.dish != null && props.dish.comments != null) {
      const cmnts = props.dish.comments.map((review) => {
        return (
          <div key={review.id}>
            <ul className="list-unstyled">
              <li className="list-item">{review.comment}</li>
              <br />
              <li className="list-item">
                --{review.author},
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(review.date)))}
              </li>
            </ul>
            <br />
          </div>
        );
      });
      return (
        <div>
          <h4> Comments </h4>
          <ul className="list-unstyled">{cmnts}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }


export default DishDetail;




