import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';

import './styles/index';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});

render(
  <AppContainer>
    <Root
      routes={routes}
      store={store}
      history={history}
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root').default;
    render(
      <AppContainer>
        <RootContainer
          routes={routes}
          store={store}
          history={history}
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}