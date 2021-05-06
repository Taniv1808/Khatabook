import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  banner: {
      marginTop: 2
    },
  bannerImage: {
    width: 370,
    height: 300,
  },
  txt:{
    backgroundColor:colors.white,
    height:130,
    width:400
  },
  txt1:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:25,
    marginLeft:45
  },
  txt2:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:5,
    marginLeft:25
  },
  bottom:{
      backgroundColor:colors.white,
      marginTop:2,
      height:230
  },
  bottomAlign:{
      marginTop:-50
  }
});
