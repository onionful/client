import { withTranslate } from 'helpers';
import { compose, PropTypes, React } from 'utils/create';

const App = ({ _ }) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">{_('title')}</h1>
    </header>
    <p className="App-intro">
      {_('foo.bar')}
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

App.propTypes = {
  _: PropTypes.func.isRequired,
};

export default compose(withTranslate)(App);
