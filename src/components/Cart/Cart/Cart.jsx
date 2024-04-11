import { useSelector } from 'react-redux';

import Card from '../../UI/Card/Card';
import { cart } from './Cart.module.css';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
