import React, { Component } from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";

export class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderComments(dish) {
        if(dish != null && dish.comments != null) {
          const cmnts = dish.comments.map(review => {
            return (
              <div key={review.id}>
                  <ul className="list-unstyled">
                    <li className="list-item">{review.comment}</li><br/>
                    <li className="list-item">--{review.author}, {review.date}</li>
                  </ul>
                  <br/>
              </div>
    
            );
          });
          return(
            <div>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
        </div>
          )
        }
    
        else {
          return (
            <div></div>
          );
        }
      }

    renderDish(dish) {
        if(dish != null) {
          return (
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
        }
    
        else {
          return (
            <div></div>
          );
        }
      }

    render() {
        
        return (
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
              </div>
              <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.selectedDish)}                
              </div>
            </div>
          );
    }
}

export default Dishdetail


