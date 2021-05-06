import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import HomepageHeader from '../../Component/HomepageHeader';
import OuterBorder from '../../Component/OuterBorder';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

export default class More extends Component {
  render() {
    return (
      <View>
        <HomepageHeader text={strings.NAME} />
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate(navigationStrings.EDIT_PROFILE)}}>
          <View style={styles.main}>
            <Image source={imagePath.account} style={styles.img} />
            <View style={styles.mainText}>
              <Text style={styles.txt}>{strings.NAME}</Text>
              <Text style={styles.txt1}>{strings.YOUR}</Text>
            </View>
          </View>
          <Text style={styles.edit}>{strings.EDIT}</Text>
          
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <OuterBorder
            txt={strings.CARD}
            txt2={strings.CASHBOOK}
            txt3={strings.PLAY}
            img={imagePath.card}
            img2={imagePath.cashbook}
            img3={imagePath.quiz}
          />
        </View>
        <View style={styles.bottom}>
        <View style={styles.settings}>
          <Image source={imagePath.settings} style={styles.settingImage}/>
          <Text style={styles.settingText}>{strings.SETTING}</Text>
          <Image source={imagePath.forward} style={styles.forward}/>
        </View>
        <View style={styles.help}>
        <Image source={imagePath.help} style={styles.settingImage}/>
          <Text style={styles.settingText}>{strings.HELP}</Text>
          <Image source={imagePath.forward} style={styles.forward}/>
        </View>
        <View style={styles.help}>
        <Image source={imagePath.about} style={styles.settingImage}/>
          <Text style={styles.settingText}>{strings.ABOUT}</Text>
          <Image source={imagePath.forward} style={styles.forward}/>
        </View>
        </View>
        <View style={styles.invite}>
            <Image source={imagePath.logo2} style={styles.logo2}/>
          <Text style={styles.inviteText}>{strings.INVITE}</Text>
          <Text style={styles.inviteText2}>{strings.INVITE_FRIENDS}</Text>
          
        </View>
        <Text style={styles.title}>{strings.TITLE}</Text>
      </View>
    );
  }
}
