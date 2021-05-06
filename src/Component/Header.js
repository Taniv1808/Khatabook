import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';
colors;

export default function Header(props) {
  const{title}=props
  return (
    <View style={styles.container}>
      <Text style={styles.main}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  main: {
    color:colors.title,
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
