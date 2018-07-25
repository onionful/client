import { Layout, Menu } from 'antd';
import { Logo } from 'components';
import { ContactPage, HomePage } from 'containers';
import { withTranslate } from 'helpers';
import { Route, Switch } from 'react-router-dom';
import { compose, glamorous, PropTypes, React } from 'utils/create';

const Header = glamorous(Layout.Header)({});

const Container = glamorous(Layout.Content)({});

const Content = glamorous.div({});

const Footer = glamorous(Layout.Footer)({});

const App = ({ _ }) => (
  <Layout>
    <Header>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Container>
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>{_('footer')}</Footer>
    </Container>
  </Layout>
);

App.propTypes = {
  _: PropTypes.func.isRequired,
};

export default compose(withTranslate)(App);
