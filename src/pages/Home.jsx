import { useRef } from "react";
import { Row, Container } from "react-bootstrap";
import "./Home.scss";
import ProductList from "../components/hocs/ProductList";
import background from "../assets/background.jpg";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";
import Product from "../components/products/Product";

const data = [
  {
    id: 1,
    imageSource: background,
    title: "Nilotica Shea butter 250ml",
    rating: 0,
    reviews: [],
    price: 132000,
    quantity: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie ornare elit, in facilisis odio suscipit ut. Integer mollis quam id placerat auctor. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent vitae rhoncus sem, vel lobortis ipsum. In hac habitasse platea dictumst. Nulla porta volutpat nulla a vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 2,
    imageSource: background,
    title: "Nilotica Shea butter 500ml",
    rating: 0,
    reviews: [],
    price: 201000,
    quantity: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie ornare elit, in facilisis odio suscipit ut. Integer mollis quam id placerat auctor. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent vitae rhoncus sem, vel lobortis ipsum. In hac habitasse platea dictumst. Nulla porta volutpat nulla a vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 3,
    imageSource: background,
    title: "Nilotica Shea butter 250ml",
    rating: 0,
    reviews: [],
    price: 13000,
    quantity: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie ornare elit, in facilisis odio suscipit ut. Integer mollis quam id placerat auctor. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent vitae rhoncus sem, vel lobortis ipsum. In hac habitasse platea dictumst. Nulla porta volutpat nulla a vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

const Home = () => {
  const ref = useRef(null);
  const scrollToTop = () => ref.current?.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <Container ref={ref} fluid className="landingImage">
        <Row>
          <h1>100% Natural Ingredients</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            voluptatibus.
          </p>
          <hr />
        </Row>
      </Container>
      <Container fluid>
        <ProductList data={data} Template={Product} />
      </Container>
      <div className="floatActionButton">
        <Fab onClick={scrollToTop}>
          <KeyboardArrowUp />
        </Fab>
      </div>
    </>
  );
};

export default Home;
