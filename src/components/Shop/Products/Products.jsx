import ProductItem from '../ProductItem/ProductItem';
import { products } from './Products.module.css';

const Products = () => {
  return (
    <section className={products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
