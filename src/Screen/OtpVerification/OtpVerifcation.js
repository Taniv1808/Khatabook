import React, {Component} from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import Button from '../../Component/Button';
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import validation from '../../utils/validation';
import styles from './styles';

export default class OtpVerifcation extends Component {
  state={
    otp:'',
    isLoading:false
  }

  onChange=(key)=>{
    return value=>{
      this.setState({
        [key]:value,
      })
    }
  }

  // isValidData = () => {
  //   let {otp} = this.state;
  //   const error = validation({otp: otp});
  //   if (error) {
  //     showMessage({
  //       type: 'danger',
  //       icon: 'danger',
  //       message: error,
  //     });
  //     return false;
  //   }
  //   return true;
  // };
  //   submit=()=>{
  //       Alert.alert(
  //           'Welcome',
  //           'Thanks To Start'
  //       )
  //       this.props.navigation.navigate(navigationStrings.HOMEPAGE)
  //   }
  onVerifyOtp = () => {
    let {isLoading} = this.state;
    actions._OtpVerification({
        userId: this.props.route.params.data,
        otp: '12345',
        deviceToken: '123',
        registerFrom: 'ANDROID',
      })
      .then(res => {
        isLoading = true;
        console.log(res);
        this.props.navigation.navigate(navigationStrings.HOMEPAGE);
      })
      .catch(error => {
        console.log(error);
        isLoading = false;
      });
    this.setState({
      isLoading: true,
    });
  };
  render() {
    return (
      <View>
        <Header  title={strings.TITLE}/>
        <Text style={styles.txt}>{strings.OTP_SENT}</Text>
        <TextInput
          placeholder={strings.PIN}
          style={styles.txtInput}
          keyboardType="numeric"
          maxLength={5}
          onChangeText={this.onChange('otp')}
        />
        <Button name={strings.SUBMIT_PIN} pressIt={this.onVerifyOtp}/>
      </View>
    );
  }
}
