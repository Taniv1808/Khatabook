import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        marginTop:-60,
        height:100
    },
  main:{
      flexDirection:'row'
  },
  img:{
    width:70,
    height:70,
    marginTop:20,
    marginLeft:20
  },
  txt:{
      fontSize:20,
      marginTop:25,
      marginLeft:10
  },
  txt1:{
      marginLeft:10,
      marginTop:10
  },
  mainText:{
      flexDirection:'column'
  },
  edit:{
      marginTop:30,
      marginTop:-50,
      marginLeft:270,
      borderWidth:1,
      width:60,
      height:30,
      textAlign:'center',
      padding:4,
      borderRadius:10,
      color:colors.textBlue,
      borderColor:colors.textBlue
  },
  border:{
      marginTop:-30
  },
  settings:{
      marginTop:20,
      borderWidth:0.1,
      backgroundColor:colors.white,
      height:50,
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
    flexDirection:'row'
  },
  settingText:{
    marginLeft:20,
    color:colors.textBlue,
    marginTop:14,
    fontSize:16
  },
  bottom:{
      marginTop:-10
  },
  settingImage:{
      width:30,
      height:30,
      marginTop:10,
      marginLeft:20
  },
  forward:{
      width:20,
      height:20,
      marginTop:17,
      marginLeft:'auto',
      marginRight:30
  },
  help:{
    marginTop:10,
    borderWidth:0.1,
    backgroundColor:colors.white,
    height:50,
    shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 3,
  flexDirection:'row'
},
invite:{
    backgroundColor:colors.white,
    height:70,
    marginTop:15
},
inviteText:{
    marginLeft:80,
    marginTop:-50
},
inviteText2:{
    marginLeft:80,
    marginTop:10,
    color:colors.textBlue
},
title:{
    textAlign:'center',
    marginTop:25,
    color:colors.textGrey
},
logo2:{
    width:60,
    height:60
}
});
