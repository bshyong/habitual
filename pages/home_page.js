'use strict';

var React = require('react-native')
var Dashboard = require('./dashboard')

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var HomePage = React.createClass({
  nextPage: function() {
    this.props.toRoute({
      name: 'Dashboard',
      component: Dashboard,
    })
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <TouchableHighlight onPress={this.nextPage} underlayColor="transparent">
          <Text>Next page please!</Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
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

module.exports = HomePage
