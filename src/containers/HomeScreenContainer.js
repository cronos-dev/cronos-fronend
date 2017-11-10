import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CounterContainer from './CounterContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Create React Redux Native App',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <CounterContainer />
      </View>
    );
  }
}
