import { Link as BaseLink } from 'react-router-dom';
import { PropTypes, React } from 'utils/create';

const Link = ({ to, children, ...props }) =>
  to.startsWith('/') ? (
    <BaseLink to={to} {...props}>
      {children}
    </BaseLink>
  ) : (
    <a href={to} {...props}>
      {children}
    </a>
  );

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
