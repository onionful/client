import { glamorous, PropTypes, React } from 'utils/create';

const Logo = ({ className }) => <div className={className}>Project name</div>;

const StyledLogo = glamorous(Logo)({});

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default StyledLogo;
