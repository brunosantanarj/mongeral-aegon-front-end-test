import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import DataProvider from './store/DataContext';

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById('root')
);
registerServiceWorker();
