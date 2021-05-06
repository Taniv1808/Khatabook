import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, moderateVerticalScale } from '../../styles/responsiveSize';

export default StyleSheet.create({
    bottomText:{
        backgroundColor:colors.white,
        marginTop:2,
        height:80
    },
    bottomText2:{
        marginTop:moderateVerticalScale(-70),
        marginLeft:moderateScale(1)
    },
    textInput:{
        marginTop:20
    },
    txt:{
        borderWidth:0.2,
        width:345,
        marginLeft:10,
        backgroundColor:colors.white,
    },
});
