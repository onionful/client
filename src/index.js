import config from 'config';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { App } from 'containers';
import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store, { history } from 'store';
import translations from 'translations';
import { LocalizeProvider } from 'react-localize-redux';

import registerServiceWorker from './registerServiceWorker';

const { defaultLocale } = config;

render(
  <Provider store={store}>
    <LocalizeProvider>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
