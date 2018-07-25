import RPropTypes from 'prop-types';
import React, { Component } from 'react';
import IPropTypes from 'react-immutable-proptypes';
import RRPropTypes from 'react-router-prop-types';

export { default as glamorous } from 'glamorous';
export { compose } from 'redux';
export { connect } from 'react-redux';
export { React, Component };

export const PropTypes = {
  ...IPropTypes,
  ...RPropTypes,
  ...RRPropTypes,
  form: RPropTypes.shape({
    validateFields: RPropTypes.func,
  }),
};
