import Lightbox from 'react-images';
import PhotoGallery from 'react-photo-gallery';
import { Component, glamorous, PropTypes, React } from 'utils/create';
import { noop } from 'lodash';

const GalleryWrapper = glamorous.div({
  margin: '3rem 0',

  '& .react-photo-gallery--gallery div': {
    justifyContent: 'center',
  },
});

class Gallery extends Component {
  state = {
    preview: false,
    currentImage: 0,
  };

  handleClose = () => {
    this.setState({ preview: false });
  };

  handleNext = () => {
    const { currentImage } = this.state;
    this.setState({ currentImage: currentImage + 1 });
  };

  handlePhotoClick = (e, { index }) => {
    this.setState({ preview: true, currentImage: index });
  };

  handlePrevious = () => {
    const { currentImage } = this.state;
    this.setState({ currentImage: currentImage - 1 });
  };

  render() {
    const { images } = this.props;
    const { currentImage, preview } = this.state;
    const columns = Math.min(images.length, 3);
    const onPhotoClick = images.length > 1 ? this.handlePhotoClick : noop;

    return (
      <GalleryWrapper>
        <PhotoGallery
          onClick={onPhotoClick}
          columns={columns}
          photos={images.map(image => ({ ...image, src: image.original }))}
        />
        <Lightbox
          images={images.map(image => ({
            ...image,
            src: image.original,
            caption: image.description,
          }))}
          backdropClosesModal
          imageCountSeparator=" / "
          currentImage={currentImage}
          isOpen={preview}
          onClose={this.handleClose}
          onClickPrev={this.handlePrevious}
          onClickNext={this.handleNext}
          preventScroll={false}
        />
      </GalleryWrapper>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired, // eslint-disable-line
};

export default Gallery;
