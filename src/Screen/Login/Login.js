import React, {Component} from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import BottomTitle from '../../Component/BottomTitle';
import Button from '../../Component/Button';
import Header from '../../Component/Header';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import actions from '../../redux/actions';
import validation from '../../utils/validation';
import styles from './styles';

export default class Login extends Component {
  state={
    mobile:'',
    isLoading:false
  }

  onChange=(key)=>{
    return value=>{
      this.setState({
        [key]:value,
      })
    }
  }
  isValidData = () => {
    let {mobile} = this.state;
    const error = validation({phoneNumber: mobile});
    if (error) {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: error,
      });
      return false;
    }
    return true;
  };
  usingPhone = () => {
    let {mobile} = this.state;
    if (this.isValidData()) {
      actions.loginUsingPhone({
          contactDetails: {
            phoneNo: mobile,
            countryCode: '+91',
            countryCodeISO: 'IN',
          },
        })
        .then(res => {
          (isLoading = true), console.log(res);
          this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION, {
            data: res.data.userId,
          });
        })
        .catch(error => {
          isLoading = false;
          console.log(error);
        });
      this.setState({
        isLoading: true,
      });
    }
  };
  render() {
    return (
      <View>
        <Header  title={strings.TITLE}/>
        <View style={styles.bottomText}>
          <View style={styles.bottomText2}>
            <BottomTitle txt={strings.TRUST} txt1={strings.ACROSS} img={imagePath.trust}/>
          </View>
        </View>
        <View style={styles.textInput}>
          <TextInput 
          placeholder="Mobile Number" 
          keyboardType="numeric" 
          maxLength={10}
          style={styles.txt}
          onChangeText={this.onChange('mobile')}/>
        </View>
        <Button name={strings.GET_PIN} pressIt={this.usingPhone} />
      </View>
    );
  }
}
