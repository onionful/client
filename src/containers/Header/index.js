import { Button, Col, Drawer, Icon, Menu, Row, Tooltip } from 'antd';
import { Link, Logo, Responsive } from 'components';
import config from 'config';
import { withTranslate } from 'helpers';
import { withRouter } from 'react-router-dom';
import { media } from 'utils';
import { Component, compose, connect, css, styled, PropTypes, React } from 'utils/create';
import { colors } from 'utils/variables';

const drawerStyle = css({
  '& .ant-drawer-body': {
    margin: 0,
    padding: 0,
  },
  '& .ant-drawer-header': {
    height: config.ui.headerHeightPx,
  },
  '& .ant-drawer-title': {
    padding: '5px 0',
  },
  '& .ant-drawer-close': {
    padding: '4px',
  },
}).toString();

const toRight = transparent =>
  css({
    float: 'right',
    ...(transparent
      ? {
          textShadow: `0 0 10px ${colors.black}`,
        }
      : {}),

    '& li': {
      marginBottom: 0,
    },
  }).toString();

const CenteredCol = styled(Col)({
  textAlign: 'center',
});

const Hamburger = styled(({ visible, transparent, ...props }) => (
  <Button ghost icon={visible ? 'menu-fold' : 'menu-unfold'} {...props} />
))(({ transparent }) => ({
  border: 'none',
  padding: 0,
  width: '32px',
  fontSize: '1.5rem',
  ...(transparent
    ? {
        color: `${colors.white} !important`,
        borderColor: `${colors.white} !important`,
      }
    : {
        color: `${colors.black} !important`,
        borderColor: `${colors.black} !important`,
      }),
}));

class Header extends Component {
  state = {
    drawerVisible: false,
  };

  toggleDrawer = () => {
    const { drawerVisible } = this.state;
    this.setState({ drawerVisible: !drawerVisible });
  };

  render() {
    const { drawerVisible } = this.state;
    const {
      _,
      routes,
      location: { pathname },
      transparentHeader,
    } = this.props;

    const menu = params => (
      <Menu {...params} selectedKeys={[pathname]} onClick={this.toggleDrawer}>
        {routes
          .toJS()
          .filter(route => !route.hidden)
          .map(({ path, key, icon, tooltip }) => (
            <Menu.Item key={path}>
              {tooltip ? (
                <Tooltip title={_(`menu.${key}`)} placement="bottom">
                  <Link to={path}>{icon && <Icon type={icon} />}</Link>
                </Tooltip>
              ) : (
                <Link to={path}>
                  {icon && <Icon type={icon} />}
                  {_(`menu.${key}`)}
                </Link>
              )}
            </Menu.Item>
          ))}
      </Menu>
    );

    return (
      <div>
        <Row type="flex" align="middle">
          <Col xs={20} md={4}>
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col xs={0} md={20}>
            {menu({
              mode: 'horizontal',
              theme: transparentHeader ? 'dark' : 'light',
              className: toRight(transparentHeader),
            })}
          </Col>
          <CenteredCol xs={4} md={0}>
            <Hamburger
              onClick={this.toggleDrawer}
              visible={drawerVisible}
              transparent={transparentHeader}
            />
          </CenteredCol>
        </Row>

        <Responsive maxWidth={media.md}>
          <Drawer
            title={<Logo />}
            placement="left"
            onClose={this.toggleDrawer}
            visible={drawerVisible}
            wrapClassName={drawerStyle}
          >
            {menu({ theme: 'light' })}
          </Drawer>
        </Responsive>
      </div>
    );
  }
}

Header.propTypes = {
  _: PropTypes.func.isRequired,
  location: PropTypes.location.isRequired,
  routes: PropTypes.list.isRequired,
  transparentHeader: PropTypes.bool,
};

Header.defaultProps = {
  transparentHeader: true,
};

const mapStateToProps = state => ({
  transparentHeader: state.getIn(['ui', 'transparentHeader']),
});

export default compose(
  withRouter,
  withTranslate,
  connect(mapStateToProps),
)(Header);
