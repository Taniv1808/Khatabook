import React, {Component} from 'react';
import {ScrollView, View,Text,Image,TouchableOpacity} from 'react-native';
import AccountHeader from '../../Component/AccountHeader';
import HomepageHeader from '../../Component/HomepageHeader';
import OuterBorder from '../../Component/OuterBorder';
import OuterSmallBorder from '../../Component/OuterSmallBorder';
import PaymentHeader from '../../Component/PaymentHeader';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

export default class Money extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <HomepageHeader text={strings.NAME} img={imagePath.settings} />
          <AccountHeader/>
          <View style={styles.header}>
          <Image source={imagePath.bank} style={styles.img2}/>
            <Text style={styles.txt3}>{strings.ADD}</Text>
            <View style={styles.anotherImg}>
            <Text style={styles.txt4}>{strings.QR}</Text>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate(navigationStrings.ADD_ACCOUNT)}}>
            <Image source={imagePath.forward} style={styles.img3}/>
            </TouchableOpacity>
            </View>
        <Text style={styles.txt5}>{strings.LINKS}</Text>
        </View>
        <View style={styles.payment}>
          <PaymentHeader />
          </View>
          <View style={styles.main}>
              <View style={styles.txt}>
              <Text>{strings.PAYMENT}</Text>
              <View style={styles.anotherText}>
              <Text style={styles.txt1}>{strings.PRICE}</Text>
              <Text style={styles.detail}>{strings.DETAILS}</Text>
              </View>
              <Text style={styles.txt2}>{strings.COLLECT_PAYMENT}</Text>
              </View>
          </View>
          <OuterBorder
            txt={strings.REQUEST}
            txt2={strings.SEND}
            txt3={strings.ORDER}
            img={imagePath.request}
            img2={imagePath.send}
            img3={imagePath.qr}
          />
          <OuterSmallBorder
            txt={strings.COLLECT}
            txt1={strings.NO_PENDING}
            txt2={strings.KHATABOOK}
            txt3={strings.SAVE}
            img={imagePath.forward}
            img1={imagePath.money}
            img3={imagePath.gold}
          />
          <View style={styles.main2}>
              <Image source={imagePath.safe} style={styles.img}/>
          <Text style={styles.bottomText}>{strings.PROMISE}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
