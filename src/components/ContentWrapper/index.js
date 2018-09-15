import { media } from 'utils';
import { glamorous } from 'utils/create';

const ContentWrapper = glamorous.div({
  maxWidth: media.xl,
  margin: '0 auto',
  padding: '0 2rem',
});

export default ContentWrapper;
