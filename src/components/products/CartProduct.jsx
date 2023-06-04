import PropTypes from "prop-types";
import "./CartProduct.scss";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const CartProduct = ({ imageSource, title, price, quantity }) => {
  return (
   <Card sx={{ display: 'flex' }} className="item-card">
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageSource}
        alt={`${title} image`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <span>UGX</span>{price.toLocaleString()}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            x{quantity}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

CartProduct.propTypes = {
  imageSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartProduct;
