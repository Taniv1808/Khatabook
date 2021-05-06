import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Alert} from 'react-native';
import BottomTitle from '../../Component/BottomTitle';
import Button from '../../Component/Button';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

export default class OuterPage extends Component {
  welcome = () => {
    Alert.alert('Khatabook', "Let's Start");
    this.props.navigation.navigate(navigationStrings.LOGIN);
  };
  render() {
    return (
      <View>
        <Header title={strings.TITLE} />
        <View style={styles.banner}>
          <Image source={imagePath.front} style={styles.bannerImage} />
        </View>
        <View style={styles.txt}>
          <Text style={styles.txt1}>{strings.MANAGE}</Text>
          <Text style={styles.txt2}>{strings.REMINDERS}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottomAlign}>
            <BottomTitle
              img={imagePath.trust}
              txt={strings.TRUST}
              txt1={strings.ACROSS}
            />
            <Button name={strings.START} pressIt={this.welcome} />
          </View>
        </View>
      </View>
    );
  }
}
