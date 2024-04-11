import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../../store/ui-slice';
import { button, badge } from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
