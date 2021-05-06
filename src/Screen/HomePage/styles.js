import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    txt:{
        fontSize:16,
        textAlign:'center',
        marginTop:200
    },
    txt1:{
        marginTop:60,
        textAlign:'center',
        borderWidth:1,
        width:200,
        marginLeft:70,
        height:40,
        padding:8,
        borderRadius:20,
        backgroundColor:colors.borderGreen,
        color:colors.white
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-100,
        marginLeft:-30
    },
    txt3:{
        fontSize:20,
        color:colors.textRed ,
        marginLeft:45
    },
    main:{
        flexDirection:'column',
    },
    innerText:{
        marginLeft:30
    },
    report:{
        color:colors.textBlue,
        textAlign:'center',
        marginTop:3
    },
    line:{
        borderWidth: 0.2,
        margin:6,
        width:310,
        marginLeft:25,
        marginTop:20,
        color:colors.textGrey
    },
    line2:{
        borderWidth:0.2,
        height:50,
        marginLeft:20,
        color:colors.textGrey
    }
})