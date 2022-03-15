import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

function CalcButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        !isNaN(Number(props.name)) && styles.buttonNumeric,
      ]}
      onPress={() => props.onPress(props.name)}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  buttonNumeric: {
    backgroundColor: '#fcfcfc',
  },
  buttonText: {
    fontSize: 18,
  },
});
export default CalcButton;
