import React from 'react';
import Responsive from 'react-responsive';

const XS = props => <Responsive {...props} maxWidth={767} />;
const SM = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Default = props => <Responsive {...props} minWidth={768} />;

export default {
  XS,
  SM,
  Tablet,
  Default,
};
