import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from "react-router-dom";

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props} />
        </div>
      </div>
    </div>
  );
};

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
