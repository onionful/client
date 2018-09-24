import { Layout } from 'antd';
import { ContentWrapper } from 'components';
import config from 'config';
import { ContactPage, Header, HomePage } from 'containers';
import { withTranslate } from 'helpers';
import { fromJS } from 'immutable';
import { noop } from 'lodash';
import { Route, Switch, withRouter } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { setTransparentHeader } from 'reducers/ui/actions';
import { Component, compose, connect, glamorous, PropTypes, React } from 'utils/create';
import { colors } from 'utils/variables';

const StyledLayout = glamorous(Layout)({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const HeaderWrapper = glamorous(({ transparent, children, ...props }) => (
  <Layout.Header {...props}>{children}</Layout.Header>
))(({ transparent }) => ({
  padding: 0,
  position: 'fixed',
  zIndex: 100,
  width: '100%',
  height: config.ui.headerHeightPx,
  transition: 'all 200ms',

  ...(transparent
    ? {
        color: colors.white,
        backgroundColor: 'transparent',
        padding: '1rem 0',
      }
    : {
        color: colors.black,
        backgroundColor: colors.background,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, .25)',
      }),
}));

const Content = glamorous(Layout.Content)({
  flex: 1,
  fontSize: '1rem',
  backgroundColor: colors.background,
});

const Footer = glamorous(Layout.Footer)({});

class App extends Component {
  state = {
    routes: fromJS([
      { key: 'main', path: '/', component: HomePage },
      { key: 'news', path: '/contact', component: ContactPage },
    ]),
  };

  componentDidMount() {
    const { handleSetTransparentHeader, history } = this.props;
    const { routes } = this.state;

    history.listen(location => {
      const { pathname, hash } = location;
      const route = routes.find(item => item.get('path') === `${pathname}${hash}`);

      handleSetTransparentHeader(this.isHomePage(location));

      switch (route.get('key')) {
        default:
          return animateScroll.scrollToTop();
      }
    });
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { location, handleSetTransparentHeader, transparentHeader } = this.props;

    const newTransparentHeader = window.pageYOffset < 100 && this.isHomePage(location);
    if (transparentHeader !== newTransparentHeader) {
      handleSetTransparentHeader(newTransparentHeader);
    }
  };

  isHomePage = ({ pathname }) => pathname === '/';

  render() {
    const { _, location, transparentHeader } = this.props;
    const { routes } = this.state;

    return (
      <StyledLayout>
        <HeaderWrapper transparent={transparentHeader}>
          <ContentWrapper>
            <Header routes={routes} />
          </ContentWrapper>
        </HeaderWrapper>
        <Content>
          <TransitionGroup>
            <CSSTransition key={location.pathname} timeout={300} classNames="fade">
              <Switch>
                {routes.toJS().map(({ key, path, component }) => (
                  <Route key={key} exact path={path} component={component} />
                ))}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{_('footer')}</Footer>
      </StyledLayout>
    );
  }
}

App.propTypes = {
  _: PropTypes.func.isRequired,
  history: PropTypes.history.isRequired,
  location: PropTypes.location.isRequired,
  transparentHeader: PropTypes.bool,
  handleSetTransparentHeader: PropTypes.func,
};

App.defaultProps = {
  transparentHeader: true,
  handleSetTransparentHeader: noop,
};

const mapStateToProps = state => ({
  transparentHeader: state.getIn(['ui', 'transparentHeader']),
});

const mapDispatchToProps = dispatch => ({
  handleSetTransparentHeader: transparent => dispatch(setTransparentHeader(transparent)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
  withTranslate,
)(App);
