/**
 * Habitual
 * Created by Benjamin Shyong
 */
'use strict';

var React = require('react-native');
var Router = require('react-native-router');
var HomePage = require ('./pages/home_page');

var {
  AppRegistry,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  }
});

var firstRoute = {
  name: 'Habitual',
  component: HomePage
};

var habitual = React.createClass({
  render: function() {
    return (
      <Router firstRoute={firstRoute}
              headerStyle={styles.header}
      />
    );
  }
});

AppRegistry.registerComponent('habitual', () => habitual);
