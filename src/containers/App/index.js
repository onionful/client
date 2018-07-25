import { React, Component } from 'utils/create';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize } from 'react-localize-redux';

class App extends Component {
  constructor(props) {
    super(props);

    //this.props.initialize({
    //  languages: [{ name: 'English', code: 'en' }, { name: 'Polish', code: 'pl' }],
    //  translation: globalTranslations,
    //  options: { renderToStaticMarkup },
    //});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withLocalize(App);
