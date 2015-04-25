'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;

var Svg = require('./react_svg/svg');
var Path = require('./react_svg/path');
var TimerMixin = require('react-timer-mixin');

var CircularProgress = React.createClass({
  mixins: [TimerMixin],

  getInitialState() {
    return {t: 0}
  },

  componentDidMount() {
    this.setInterval(this.updateTime, 30);
  },

  updateTime() {
    this.setState({t: this.state.t + 0.05});
  },

  drawSine(t) {
    var path = `M ${0} ${Math.sin(t) * 100 + 120}`;
    var x, y;

    for (var i = 0; i <= 10; i += 0.5) {
      x = i * 50;
      y = Math.sin(t + x) * 100 + 120;
      path = path + ` L ${x} ${y}`
    }

    return path;
  },

  render() {
    var circleData = `<circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" stroke="#333" stroke-width="2px"></circle>
  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke="#FF9F1E" stroke-width="2px" stroke-dashoffset="0"></circle>`
    return (
      <View style={{backgroundColor: 'white'}}>
        <Svg width={320} height={300} style={{width: 320, height: 300}}
             forceUpdate={this.state.t.toString()} data={circleData}>
          <Path fill="none" stroke="#00D8FF" strokeWidth="3" strokeMiterlimit="10"
                d={this.drawSine(this.state.t)} />
        </Svg>
      </View>
    );
  }
});

module.exports = CircularProgress;
