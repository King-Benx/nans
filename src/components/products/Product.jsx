import { ButtonGroup, Rating, Button } from "@mui/material";
import { Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Product.scss";

const Product = ({
  imageSource,
  title,
  rating,
  reviews,
  price,
  quantity,
  description,
}) => {
  const [state, setState] = useState({
    rating: rating,
  });
  return (
    <Row className="product">
      <Col className="product-image" xs={12} sm={6}>
        <Image src={imageSource} rounded />
      </Col>
      <Col className="product-details" xs={12} sm={6}>
        <div className="product-text">
          <h4>{title}</h4>
          <Row>
            <Col>
              <Rating
                value={state.rating}
                onChange={(e, value) =>
                  setState((prev) => {
                    return {
                      ...prev,
                      rating: value,
                    };
                  })
                }
              />
            </Col>
            <Col>{reviews.length} Reviews</Col>
          </Row>
          <p className="money">UGX {price.toLocaleString()}</p>
          {quantity > 0 ? (
            <small>{quantity} available</small>
          ) : (
            <small>Out of stock, restock in less than 3 days</small>
          )}
          <p>{description}</p>
          <Row>
            <Col xxs={12} xs={6}>
              <ButtonGroup  
               className="product-counter"       
              >
                <Button className="counter-button-left">-</Button>
                <Button className="counter-value" disabled>0</Button>
                <Button className="counter-button-right">+</Button>
              </ButtonGroup>
            </Col>
            <Col xs={6} xxs={12}><Button variant="contained" className="add-to-cart">Add to Cart</Button></Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

Product.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Product;
