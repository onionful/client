import { glamorous, PropTypes, React } from 'utils/create';

const Logo = ({ className }) => <div className={className}>Project name</div>;

const StyledLogo = glamorous(Logo)({
  width: '120px',
  height: '31px',
  lineHeight: '31px',
  background: 'rgba(255,255,255,.2)',
  margin: '16px 24px 16px 0',
  float: 'left',
});

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default StyledLogo;
