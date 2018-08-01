import { Button, Col, Drawer, Icon, Layout, Menu, Row } from 'antd';
import { Link, Logo, Responsive } from 'components';
import config from 'config';
import { withTranslate } from 'helpers';
import { withRouter } from 'react-router-dom';
import { media } from 'utils';
import { Component, compose, css, glamorous, PropTypes, React } from 'utils/create';

const drawerStyle = css({
  '& .ant-drawer-body': {
    margin: 0,
    padding: 0,
  },
  '& .ant-drawer-header': {
    height: config.ui.headerHeight,
  },
  '& .ant-drawer-title': {
    padding: '5px 0',
  },
  '& .ant-drawer-close': {
    padding: '4px',
  },
}).toString();

const toRight = css({ float: 'right' }).toString();

const StyledHeader = glamorous(Layout.Header)({
  padding: 0,
  position: 'fixed',
  width: '100%',
  height: config.ui.headerHeight,
  color: 'white',
});

const CenteredCol = glamorous(Col)({
  textAlign: 'center',
});

const Hamburger = glamorous(({ visible, ...props }) => (
  <Button ghost icon={visible ? 'menu-fold' : 'menu-unfold'} {...props} />
))({
  border: 'none',
  padding: 0,
  width: '32px',
  fontSize: '1.5rem',
});

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
      location: { pathname },
    } = this.props;

    const items = [
      { key: 'main', path: '/', icon: 'home' },
      { key: 'news', path: '/news', icon: 'file-text' },
      { key: 'contact', path: '/contact', icon: 'mail' },
      { key: 'facebook', path: 'https://facebook.com', icon: 'facebook' },
    ];

    console.log('pathname', pathname);
    const menu = params => (
      <Menu {...params} selectedKeys={[pathname]} onClick={this.toggleDrawer}>
        {items.map(({ path, key, icon }) => (
          <Menu.Item key={path}>
            <Link to={path}>
              <Icon type={icon} />
              {_(`menu.${key}`)}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );

    return (
      <StyledHeader>
        <Row type="flex" align="middle">
          <Col xs={20} md={6}>
            <Logo />
          </Col>
          <Col xs={0} md={18}>
            {menu({ mode: 'horizontal', theme: 'dark', className: toRight })}
          </Col>
          <CenteredCol xs={4} md={0}>
            <Hamburger onClick={this.toggleDrawer} visible={drawerVisible} />
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
            {menu()}
          </Drawer>
        </Responsive>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  _: PropTypes.func.isRequired,
  location: PropTypes.location.isRequired,
};

export default compose(
  withRouter,
  withTranslate,
)(Header);
