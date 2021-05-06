import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import BackToPageHeader from '../../Component/BackToPageHeader';
import Button from '../../Component/Button';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import styles from './styles';

export default class EditProfile extends Component {
  render() {
    return (
      <View>
        <BackToPageHeader txt={strings.EDIT_PROFILE} />
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={imagePath.account} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <TextInput
            placeholder={strings.BUSINESS_NAME}
            style={styles.txtinput}
          />
          <TextInput placeholder={strings.YOUR_NAME} style={styles.txtinput} />
          <TextInput placeholder={strings.NUMBER} style={styles.txtinput}keyboardType='numeric' maxLength={10} />
        </View>
        <View style={styles.btn}>
          <Button name={strings.SAVE} />
        </View>
      </View>
    );
  }
}
