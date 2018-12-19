import { Global } from '@emotion/core';
import { ConnectedRouter } from 'connected-react-router/immutable';
import App from 'containers/App';
import { hydrate, render } from 'react-dom';
import { LocalizeProvider } from 'react-localize-redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createStore, { history } from 'store';
import { typography, typographyFontsUrl } from 'utils';
import { css, React } from 'utils/create';

import registerServiceWorker from './registerServiceWorker';

const store = createStore();
const root = document.getElementById('root');
const globalStyles = css`
  @import url('${typographyFontsUrl}');
  ${typography.toString()}
  
  #root {
    min-height: 100%;
    display: flex;
  }

  .fade-enter { opacity: 0; z-index: 1; }
  .fade-enter.fade-enter-active { opacity: 1; transition: opacity 250ms ease-in; }
`;

(root.hasChildNodes() ? hydrate : render)(
  <Provider store={store}>
    <LocalizeProvider>
      <Global styles={globalStyles} />
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
