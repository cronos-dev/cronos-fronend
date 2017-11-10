import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default ({ counter, increment, decrement }) => (
  <View style={{ alignItems: 'center', padding: 5 }}>
    <Text>{counter}</Text>
    <TouchableOpacity onPress={increment} style={styles.button}>
      <Text>INCREMENT</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={decrement} style={styles.button}>
      <Text>DECREMENT</Text>
    </TouchableOpacity>
  </View>
);
