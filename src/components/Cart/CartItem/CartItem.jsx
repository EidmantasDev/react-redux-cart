import {
  item,
  pricecss,
  itemprice,
  details,
  quantitycss,
  actions,
} from './CartItem.module.css';

const CartItem = ({ item: { title, quantity, total, price } }) => {
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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
