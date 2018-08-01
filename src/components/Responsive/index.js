import { React, PropTypes } from 'utils/create';
import ReactResponsive from 'react-responsive';

const Responsive = ({ children, maxDeviceWidth, maxWidth, ...props }) => (
  <ReactResponsive
    {...props}
    maxDeviceWidth={maxDeviceWidth > 0 ? maxDeviceWidth - 1 : maxWidth}
    maxWidth={maxWidth > 0 ? maxWidth - 1 : maxWidth}
  >
    {children}
  </ReactResponsive>
);

Responsive.propTypes = {
  children: PropTypes.node.isRequired,
  maxDeviceWidth: PropTypes.number,
  maxWidth: PropTypes.number,
};

Responsive.defaultProps = {
  maxDeviceWidth: undefined,
  maxWidth: undefined,
};

export default Responsive;
