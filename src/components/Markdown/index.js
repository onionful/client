import Gallery from 'components/Gallery';
import ReactMarkdown from 'react-markdown';
import RemarkShortcodes from 'remark-shortcodes';
import { PropTypes, React } from 'utils/create';

const Markdown = ({ source, images = {}, ...props }) => (
  <ReactMarkdown
    {...props}
    source={source}
    escapeHtml={false}
    plugins={[[RemarkShortcodes, { startBlock: '[[', endBlock: ']]' }]]}
    renderers={{
      shortcode: ({ identifier, attributes }) => {
        switch (identifier) {
          case 'Gallery':
            return (
              <Gallery
                images={(attributes.ids || '').split(',').map(id => ({
                  ...images[id],
                  original: images[id].url,
                }))}
              />
            );

          default:
            return '';
        }
      },
    }}
  />
);

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
  images: PropTypes.object, // eslint-disable-line
};

Markdown.defaultProps = {
  images: {},
};

export default Markdown;
