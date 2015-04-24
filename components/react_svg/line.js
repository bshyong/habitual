/**
 * @providesModule Line
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


var Line = React.createClass({
  propTypes: {
    x1: PropTypes.string,
    y1: PropTypes.string,
    x2: PropTypes.string,
    y2: PropTypes.string,
    style: PropTypes.string,
  },

  render() {
    return <View />;
  },
});

module.exports = Line;
