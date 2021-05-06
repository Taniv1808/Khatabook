import React from 'react';
import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

export default function AccountHeader() {
  return (
    <View style={styles.container}>

      <View style={styles.main}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textBlue,
    height: 110,
  },
  main: {
    width: 320,
    height: 90,
    backgroundColor: colors.borderGreen,
    marginLeft: 20,
    marginTop: -40,
    borderRadius: 10,
  },
});
