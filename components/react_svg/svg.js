/**
 * @providesModule Svg
 * @flow
 */

 // https://github.com/brentvatne/react-native-svg/blob/master/Svg.js

'use strict';

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var merge = require('merge');
var React = require('react-native');
var ReactChildren = require('ReactChildren');

var {
  View,
  PropTypes,
  StyleSheet,
} = React;

var Svg = React.createClass({
  propTypes: {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  },

  statics: {
    Path: function(path) {
      var { fill, stroke, strokeWidth, strokeMiterLimit, d, transform } = path.props;
      return `<path fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" d="${d}" transform="${transform}"/>`
    }
  },

  getInitialState() {
    return { data: "" }
  },

  serialize(el: Object): ?Svg {
    return Svg[el.type.displayName](el);
  },

  stateFromChildren(): ?string {
    var data = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.props.width}px" height="${this.props.height}px">`;

    ReactChildren.forEach(this.props.children, (child) => {
      data = data + this.serialize(child);
    });

    data = data + "</svg>"
    return data;
  },

  render() {
    var nativeProps = {
      src: null,
      data: null,
      style: this.props.style,
      originalWidth: this.props.width,
      originalHeight: this.props.height,
      forceUpdate: this.props.forceUpdate,
    };

    if (this.props.source) {
      nativeProps.src = this.props.source.uri;
    } else if (this.props.data) {
      nativeProps.data = this.props.data;
    } else {
      nativeProps.data = this.stateFromChildren();
    }

    return <RNSvg {...nativeProps} />
  },
});

var deepDiffer = require('deepDiffer');

var RNSvg = createReactIOSNativeComponentClass({
  validAttributes: merge(ReactIOSViewAttributes.UIView, {src: true, data: {differ: deepDiffer}, originalWidth: true, originalHeight: true, forceUpdate: true}),
  uiViewClassName: 'RNSvg',
});

module.exports = Svg;
