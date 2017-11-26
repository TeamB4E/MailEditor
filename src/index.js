import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '_STORE_';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

import Editor from './Editor';
import './index.css';

const renderApplication = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Editor />
    </Provider>, document.getElementById('root'));
}

renderApplication();
