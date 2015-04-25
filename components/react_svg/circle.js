/**
 * @providesModule Circle
 * @flow
 */

'use strict';

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var merge = require('merge');
var React = require('react-native');

var {
  View,
  PropTypes,
  StyleSheet,
} = React;

var Circle = React.createClass({
  propTypes: {
    radius: PropTypes.string,
    cx: PropTypes.string,
    cy: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    strokeWidth: PropTypes.string,
  },

  render() {
    return <View />;
  },
});

module.exports = Circle;
