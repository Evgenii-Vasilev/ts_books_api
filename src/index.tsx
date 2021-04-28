import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './redux/store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
