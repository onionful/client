import { Icon } from 'antd';
import { styled, PropTypes, React } from 'utils/create';

const Logo = styled(({ className }) => (
  <div className={className}>
    <Icon type="star" /> Project name
  </div>
))({
  margin: '0 1rem',
});

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
