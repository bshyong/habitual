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
      radius: 50,
      text: '',
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

  render() {
    return (
      <View>
        <Svg  width={this.props.radius * 2}
              height={this.props.radius * 2}
              style={{width: this.props.radius * 2, height: this.props.radius * 2}} >
          <Circle radius={this.props.radius * 0.8}
                  cx={this.props.radius}
                  cy={this.props.radius}
                  fill="none"
                  stroke="#FF9F1E"
                  strokeWidth={this.props.radius / 7} />
        </Svg>
      </View>
    );
  }
});

module.exports = CircularProgress;
