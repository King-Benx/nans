import PropTypes from "prop-types";
import Product from "./Product";

const ProductList = ({data}) =>(
    <>
        {data.map((it) => <Product key={it.id} {...it} />)}
    </>
);

ProductList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default ProductList;