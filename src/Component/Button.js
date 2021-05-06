import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default function Button(props) {
  const {name, pressIt} = props;
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={pressIt}>
        <Text style={styles.txt}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.textBlue,
    borderWidth: 0.2,
    marginTop: 20,
    width: 345,
    height: 60,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  txt: {
    color: 'white',
  },
});
