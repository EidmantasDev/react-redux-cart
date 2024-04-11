import { useDispatch } from 'react-redux';

import Card from '../../UI/Card/Card';
import { item, pricecss, actions } from './ProductItem.module.css';
import { cartActions } from '../../../store/cart-slice';

const ProductItem = ({ title, price, description, id }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={pricecss}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
