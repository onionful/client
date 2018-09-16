/* eslint-disable */
import { ConnectedRouter } from 'connected-react-router/immutable';
import App from 'containers/App';
import 'glamor/reset';
import { hydrate, render } from 'react-dom';
import { LocalizeProvider } from 'react-localize-redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createStore, { history } from 'store';
import { css, React } from 'utils/create';
import Typography from 'typography';
import deYoungTheme from 'typography-theme-de-young';

import { fonts } from 'utils/variables';

import registerServiceWorker from './registerServiceWorker';

const typography = new Typography(deYoungTheme);

// css.global('#root', { height: '100%', fontFamily: fonts.roboto });
// css.global('h1, h2, h3, h4, h5, h6', { fontFamily: fonts.rokkitt });
// css.insert(fonts.url);
//
css.global('#root', { height: '100%' });
css.insert(typography.toString());

const store = createStore();
const root = document.getElementById('root');

(root.hasChildNodes() ? hydrate : render)(
  <Provider store={store}>
    <LocalizeProvider>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </LocalizeProvider>
  </Provider>,
  root,
);

registerServiceWorker();
