import config from 'config';
import { withTranslate } from 'helpers';
import { compose, styled, PropTypes, React } from 'utils/create';
import ContentWrapper from '../ContentWrapper';

const StyledPage = styled.section({
  marginTop: config.ui.headerHeightPx,
  padding: '1rem 0',
});

const Page = ({ children }) => (
  <StyledPage>
    <ContentWrapper>{children}</ContentWrapper>
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default compose(withTranslate)(Page);
