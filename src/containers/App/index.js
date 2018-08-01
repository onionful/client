import { Layout } from 'antd';
import config from 'config';
import { ContactPage, Header, HomePage } from 'containers';
import { withTranslate } from 'helpers';
import { Route, Switch } from 'react-router-dom';
import { media } from 'utils';
import { compose, glamorous, PropTypes, React } from 'utils/create';

const StyledLayout = glamorous(Layout)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const ResponsiveWrapper = glamorous.div({
  maxWidth: media.xl,
  margin: '0 auto',
});

const HeaderWrapper = glamorous(Layout.Header)({
  padding: 0,
  position: 'fixed',
  width: '100%',
  height: config.ui.headerHeight,
  color: 'white',
});

const ContentWrapper = glamorous(Layout.Content)({
  marginTop: config.ui.headerHeight,
  flex: 1,
  padding: '1rem',
  fontSize: '1rem',
  backgroundColor: 'white',
});

const Footer = glamorous(Layout.Footer)({});

const App = ({ _ }) => (
  <StyledLayout>
    <HeaderWrapper>
      <ResponsiveWrapper>
        <Header />
      </ResponsiveWrapper>
    </HeaderWrapper>
    <ContentWrapper>
      <ResponsiveWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </ResponsiveWrapper>
    </ContentWrapper>
    <Footer style={{ textAlign: 'center' }}>{_('footer')}</Footer>
  </StyledLayout>
);

App.propTypes = {
  _: PropTypes.func.isRequired,
};

export default compose(withTranslate)(App);
