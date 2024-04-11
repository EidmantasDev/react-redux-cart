import { useDispatch } from 'react-redux';

import { uiActions } from '../../../store/cart-slice';
import { button, badge } from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={badge}>1</span>
    </button>
  );
};

export default CartButton;
