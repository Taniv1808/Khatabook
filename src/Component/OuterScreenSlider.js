import React, {Component, version} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../styles/colors';
import {moderateScale, moderateVerticalScale, verticalScale} from '../styles/responsiveSize';

const slides = [
  {
    key: 'one',
    text: 'Welcome to Khatabook!',
    image: require('../assets/images/logo.png'),
  },
  {
    key: 'two',
    text: 'We are here for you!',
    image: require('../assets/images/dukaan.png'),
  },
  {
    key: 'three',
    text: "Let's Start!",
    image: require('../assets/images/khata.png'),
  },
];

export default class OuterScreenSlider extends Component {
  state = {
    showRealApp: false,
  };

  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>{item.text}</Text>
        <Image
          source={item.image}
          style={styles.sliderImage}
        />
      </View>
    );
  };

  render() {
    console.log(this.props);
    if (this.state.showRealApp) {
      return <OuterScreenSlider />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this.props._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.themeColor,
        flex:1,
    },
  txt: {
    textAlign: 'center',
    fontSize: 20,
    marginTop:10
  },
  sliderImage:{
      resizeMode:"cover",
      width:350,
      marginLeft:5,
      marginTop:30,
      height:500
  }
});
