import PropTypes from "prop-types";

const ProductList = ({ data, Template }) => (
  <>
    {data.map(it => (
      <Template key={it.id} {...it} />
    ))}
  </>
);

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  Template: PropTypes.func.isRequired,
};

export default ProductList;
