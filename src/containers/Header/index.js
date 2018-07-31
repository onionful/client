import { Button, Col, Drawer, Icon, Layout, Menu, Row } from 'antd';
import { Link, Logo } from 'components';
import { withTranslate } from 'helpers';
import { withRouter } from 'react-router-dom';
import { Component, compose, css, glamorous, PropTypes, React } from 'utils/create';

const drawerStyle = css({
  '& .ant-drawer-body': {
    margin: 0,
    padding: 0,
  },
});

const StyledHeader = glamorous(Layout.Header)({
  padding: 0,
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

    return (
      <StyledHeader>
        <Row type="flex" justify="space-between" align="middle">
          <Col span={12}>
            <Logo />
          </Col>
          <CenteredCol span={4}>
            <Hamburger onClick={this.toggleDrawer} visible={drawerVisible} />
          </CenteredCol>
        </Row>

        <Drawer
          title={<Logo />}
          placement="left"
          onClose={this.toggleDrawer}
          visible={drawerVisible}
          wrapClassName={`${drawerStyle}`}
        >
          <Menu selectedKeys={[pathname]} onClick={this.toggleDrawer}>
            {items.map(({ path, key, icon }) => (
              <Menu.Item key={key}>
                <Link to={path}>
                  <Icon type={icon} />
                  {_(`menu.${key}`)}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
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
