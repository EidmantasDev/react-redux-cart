import { useDispatch } from 'react-redux';

import {
  item,
  pricecss,
  itemprice,
  details,
  quantitycss,
  actions,
} from './CartItem.module.css';
import { cartActions } from '../../../store/cart-slice';

const CartItem = ({ item: { title, quantity, total, price, id } }) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
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
      <header>
        <h3>{title}</h3>
        <div className={pricecss}>
          ${total.toFixed(2)}{' '}
          <span className={itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={details}>
        <div className={quantitycss}>
          x <span>{quantity}</span>
        </div>
        <div className={actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
