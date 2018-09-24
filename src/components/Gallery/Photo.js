import { noop } from 'lodash';
import { glamorous, PropTypes, React } from 'utils/create';

const imgWithClick = { cursor: 'pointer' };

const Description = glamorous.p({
  fontStyle: 'italic',
});

const Photo = ({ isSingle, index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin };

  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  const image = (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <img
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      alt={photo.description}
      {...photo}
      onClick={onClick ? handleClick : null}
    />
  );

  return isSingle ? (
    <div>
      {image}
      <Description>{photo.description}</Description>
    </div>
  ) : (
    image
  );
};

export const photoPropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = {
  isSingle: PropTypes.bool,
  index: PropTypes.number.isRequired,
  photo: photoPropType.isRequired,
  margin: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  direction: PropTypes.string.isRequired,
  top: ({ direction, top }) => {
    if (direction === 'column' && typeof top !== 'number') {
      return new Error('top is a required number when direction is set to `column`');
    }
    return null;
  },
  left: ({ direction, left }) => {
    if (direction === 'column' && typeof left !== 'number') {
      return new Error('left is a required number when direction is set to `column`');
    }
    return null;
  },
};

Photo.defaultProps = {
  isSingle: false,
  onClick: noop,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
};

export default Photo;
