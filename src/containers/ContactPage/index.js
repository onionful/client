import { Markdown } from 'components';
import { withTranslate } from 'helpers';
import { React, compose, PropTypes } from 'utils/create';

const ContactPage = ({ _ }) => <Markdown source={_('contact')} />;

ContactPage.propTypes = {
  _: PropTypes.func.isRequired,
};

export default compose(withTranslate)(ContactPage);
