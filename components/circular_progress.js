'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Svg = require('./react_svg/svg');
var Circle = require('./react_svg/circle');
// var TimerMixin = require('react-timer-mixin');

var CircularProgress = React.createClass({
  // mixins: [TimerMixin],

  getDefaultProps() {
    return {
      radius: 50
    }
  },

  getInitialState() {
    return {
      progress: 0
    }
  },

  // componentDidMount() {
  //   this.setInterval(this.updateTime, 30);
  // },
  //
  // updateTime() {
  //   this.setState({t: this.state.t + 0.05});
  // },
  //
  // drawSine(t) {
  //   var path = `M ${0} ${Math.sin(t) * 100 + 120}`;
  //   var x, y;
  //
  //   for (var i = 0; i <= 10; i += 0.5) {
  //     x = i * 50;
  //     y = Math.sin(t + x) * 100 + 120;
  //     path = path + ` L ${x} ${y}`
  //   }
  //
  //   return path;
  // },

  renderSvg() {
    var circumference = 2 * this.props.radius * Math.PI
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.props.radius * 2}px" height="${this.props.radius * 2}px">
      <circle r="${this.props.radius * 0.8}" cx="${this.props.radius}" cy="${this.props.radius}" fill="none" stroke="#333" stroke-width="${this.props.radius / 7}px" stroke-dasharray="${circumference}" stroke-dashoffset="${100}" />
      <circle r="${this.props.radius * 0.8}" cx="${this.props.radius}" cy="${this.props.radius}" fill="none" stroke="#FF9F1E" stroke-width="${this.props.radius / 7}px" stroke-dasharray="${circumference}" stroke-dashoffset="${100}" />
    </svg>`
  },

  render() {
    return (
      <View>
        <Svg  width={this.props.radius * 2}
              height={this.props.radius * 2}
              style={{width: this.props.radius * 2, height: this.props.radius * 2}}
              data={this.renderSvg()} />
      </View>
    );
  }
});

module.exports = CircularProgress;
