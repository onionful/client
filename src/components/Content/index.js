import { compose, connect, PropTypes, React } from 'utils/create';
import ContentWrapper from '../ContentWrapper';

const Content = ({ children, wrapper }) => {
  const Wrapper = wrapper ? ContentWrapper : 'div';

  return <Wrapper>{children}</Wrapper>;
};

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  wrapper: PropTypes.bool,
};

Content.defaultProps = {
  wrapper: true,
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Content);
