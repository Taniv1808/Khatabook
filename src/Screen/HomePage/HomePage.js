import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View,Modal} from 'react-native';
import HomepageHeader from '../../Component/HomepageHeader';
import PaymentHeader from '../../Component/PaymentHeader';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

export default class HomePage extends Component {
  addCustomer=()=>{
    this.props.navigation.navigate(navigationStrings.ADD_CUSTOMER)
  }
  render() {
    return (
      <View>
        <HomepageHeader text={strings.NAME} img={imagePath.rupee} />
        <PaymentHeader />

        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.txt3}>{strings.PRICE}</Text>
            <Text style={styles.innerText}>{strings.GIVE}</Text>
          </View>
          <View style={styles.line2}></View>
          <View style={styles.main}>
            <Text style={styles.txt3}>{strings.PRICE}</Text>
            <Text style={styles.innerText}>{strings.GET}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.report}>{strings.REPORT}</Text>
        <Text style={styles.txt}>{strings.CUSTOMER}</Text>

          <View>
          <TouchableOpacity onPress={this.addCustomer}>
            <Text style={styles.txt1}>{strings.NEW_CUSTOMER}</Text>
          </TouchableOpacity>
        </View>
        <View>
        </View>
      </View>
    );
  }
}
