import CartButton from '../../Cart/CartButton/CartButton';
import { header } from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
