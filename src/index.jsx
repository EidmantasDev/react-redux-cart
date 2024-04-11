import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import './index.css';
import store from './store/index.js';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
