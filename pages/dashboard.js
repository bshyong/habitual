'use strict';

var React = require('react-native')
var CircularProgress = require('../components/circular_progress')

var {
  StyleSheet,
  Text,
  View,
} = React;

var Dashboard = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Dashboard view
        </Text>
        <CircularProgress />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Dashboard
