import { Layout } from 'antd';
import config from 'config';
import { ContactPage, Header, HomePage } from 'containers';
import { withTranslate } from 'helpers';
import { Route, Switch } from 'react-router-dom';
import { compose, glamorous, PropTypes, React } from 'utils/create';

const StyledLayout = glamorous(Layout)({
  height: '100%',
});

const Container = glamorous(Layout.Content)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: config.ui.headerHeight,
});

const Content = glamorous.div({
  flex: 1,
  padding: '1rem',
  fontSize: '1rem',
  backgroundColor: 'white',
});

const Footer = glamorous(Layout.Footer)({});

const App = ({ _ }) => (
  <StyledLayout>
    <Header />
    <Container>
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>{_('footer')}</Footer>
    </Container>
  </StyledLayout>
);

App.propTypes = {
  _: PropTypes.func.isRequired,
};

export default compose(withTranslate)(App);
