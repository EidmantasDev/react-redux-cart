import ProductItem from '../ProductItem/ProductItem';
import { products } from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'My first book I wrote',
  },
  {
    id: 'p2',
    price: 12,
    title: 'My second book',
    description: 'My second book I wrote',
  },
  {
    id: 'p3',
    price: 30,
    title: 'My third book',
    description: 'My third book I wrote',
  },
  {
    id: 'p4',
    price: 5,
    title: 'My fourth book',
    description: 'My fourth book I wrote',
  },
];

const Products = () => {
  return (
    <section className={products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
