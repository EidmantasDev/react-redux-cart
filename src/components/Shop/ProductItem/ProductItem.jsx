import Card from '../../UI/Card/Card';
import { item, prices, actions } from './ProductItem.module.css';

const ProductItem = ({ title, price, description }) => {
  return (
    <li className={item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={prices}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
