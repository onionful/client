import { PropTypes, React } from 'utils/create';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ source, ...props }) => (
  <ReactMarkdown source={source} escapeHtml={false} {...props} />
);

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Markdown;
