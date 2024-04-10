import Card from '../../UI/Card/Card';
import { cart } from './Cart.module.css';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  return (
    <Card className={cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
