import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import colors from '../styles/colors';
colors;

export default function OuterBorder(props) {
  const {txt, txt2, txt3, img, img2, img3} = props;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={img} style={styles.img} />
        <Text style={styles.txt}>{txt}</Text>
      </View>
      <View style={styles.main}>
        <Image source={img2} style={styles.img} />
        <Text style={styles.txt}>{txt2}</Text>
      </View>
      <View style={styles.main}>
        <Image source={img3} style={styles.img} />
        <Text style={styles.txt}>{txt3}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  main: {
    backgroundColor: colors.white,
    width: 95,
    height: 160,
    marginLeft: 20,
    marginTop: 40,
    borderRadius: 10,
    shadowColor: '#000',
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
    textAlign: 'center',
    marginTop: 35,
  },
  img: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 20,
  },
});
