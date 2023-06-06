import { ButtonGroup, Rating, Button } from "@mui/material";
import { Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import { addItemToCart } from "../../redux/reducers/cartReducer";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "./Product.scss";

const Product = ({
  id,
  imageSource,
  title,
  rating,
  reviews,
  price,
  quantity,
  description,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    rating: rating,
    count: 0,
  });

  const handleItemDecrease = () => {
    setState(prev => {
      return {
        ...prev,
        count: prev.count <= 0 ? 0 : (prev.count -= 1),
      };
    });
  };

  const handleItemIncrease = () => {
    setState(prev => {
      return {
        ...prev,
        count: (prev.count += 1),
      };
    });
  };

  const handleAddToCart = () =>
    dispatch(
      addItemToCart({
        id,
        imageSource,
        title,
        price,
        quantity: state.count,
      })
    );

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
                  setState(prev => {
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
          <p className="money">
            <span>UGX</span> {price.toLocaleString()}
          </p>
          {quantity > 0 ? (
            <small>{quantity} available</small>
          ) : (
            <small>Out of stock, restock in less than 3 days</small>
          )}
          <p className="description">{description}</p>
          <Row>
            <Col>
              <ButtonGroup className="product-counter">
                <Button
                  className="counter-button-left"
                  onClick={handleItemDecrease}
                >
                  -
                </Button>
                <Button className="counter-value" disabled>
                  {state.count}
                </Button>
                <Button
                  className="counter-button-right"
                  onClick={handleItemIncrease}
                >
                  +
                </Button>
              </ButtonGroup>
              <Button
                disabled={state.count > 0 ? false : true}
                variant="contained"
                className="add-to-cart"
                onClick={handleAddToCart}
              >
                {quantity > 0 ? "Add to Cart" : "Pre-order"}
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Product;
