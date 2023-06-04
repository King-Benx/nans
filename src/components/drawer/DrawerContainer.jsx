import Container from "react-bootstrap/Container";
import Drawer from "@mui/material/Drawer";
import CartProduct from "../products/CartProduct";
import ProductList from "../hocs/ProductList";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Row, Col } from "react-bootstrap";
import "./DrawerContainer.scss";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const DrawerContainer = ({ onToggle, isOpen }) => {
  const data = useSelector(state => state.cart);

  const subTotal = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCost = 10000;
  const discount = 0;
  const total = subTotal - subTotal * (discount / 100) + shippingCost;

  return (
    data.length > 0 && (
      <Drawer anchor="right" open={isOpen} onClose={e => onToggle(e)}>
        <Container className="drawer-container">
          <hr />
          <ProductList data={data} Template={CartProduct} />
          <Box component="form" noValidate autoComplete="off">
            <FormControl fullWidth>
              <TextField
                color="success"
                label="Discount code"
                variant="outlined"
              />
            </FormControl>
          </Box>
          <TableContainer component={Paper} className="costing-container">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="gray-text">Subtotal</TableCell>
                  <TableCell align="right">
                    UGX {subTotal.toLocaleString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="gray-text">Discount</TableCell>
                  <TableCell className="gray-text" align="right">
                    {discount}%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="gray-text">Shippment Cost</TableCell>
                  <TableCell className="gray-text" align="right">
                    UGX {shippingCost.toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Row>
            <Col>
              <p className="gray-text">Grand Total:</p>
            </Col>
            <Col>
              <p className="total">UGX {total.toLocaleString()}</p>
            </Col>
          </Row>
          <Button className="checkout">Proceed to checkout</Button>
        </Container>
      </Drawer>
    )
  );
};

DrawerContainer.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default DrawerContainer;
