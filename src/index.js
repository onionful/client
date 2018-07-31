import { ConnectedRouter } from 'connected-react-router/immutable';
import { App } from 'containers';
import 'normalize.css';
import { render } from 'react-dom';
import { LocalizeProvider } from 'react-localize-redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createStore, { history } from 'store';
import { React, css } from 'utils/create';

import registerServiceWorker from './registerServiceWorker';

css.global('#root', { height: '100%' });

const store = createStore();

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
