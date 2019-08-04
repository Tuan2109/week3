import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function Header(props) {
  return (
    <View style={styles.layoutHeader}>
      <Text style={[
        styles.buttonText,
        {
          color: props.colorResult,
        }
      ]}>
        {props.result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  layoutHeader: {
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    alignContent: 'center',
    textAlign: 'center',
    paddingTop: 50,
  },
});