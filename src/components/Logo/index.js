import { Icon } from 'antd';
import { glamorous, PropTypes, React } from 'utils/create';

const Logo = glamorous(({ className }) => (
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
