import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../styles/colors';

export default function OuterSmallBorder(props) {
  const {txt, txt1, txt2, txt3, img, img1, img3} = props;
  return (
    <View>
      <View style={styles.container}>
        <Image source={img1} style={styles.img1} />
        <View style={styles.main}>
          <Text style={styles.txt}>{txt}</Text>
          <Image source={img} style={styles.img} />
        </View>
        <Text style={styles.txt1}>{txt1}</Text>
      </View>
      <View style={styles.container}>
        <Image source={img3} style={styles.img1} />
        <View style={styles.main}>
          <Text style={styles.txt}>{txt2}</Text>
          <Image source={img} style={styles.img} />
        </View>
        <Text style={styles.txt1}>{txt3}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 320,
    height: 80,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txt: {
    fontSize: 18,
    marginLeft: 52,
    marginTop: -49,
  },
  txt1: {
    marginTop: -25,
    marginLeft: 54,
    color: colors.textGrey,
  },
  main: {
    flexDirection: 'row',
  },
  img: {
    width: 20,
    height: 20,
    marginTop: -40,
    marginLeft: 'auto',
    marginRight: 20,
  },
  img1: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
  },
});
