import React from 'react'
import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import imagePath from '../constants/imagePath'
import {useNavigation} from '@react-navigation/native'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'


export default function BackToPageHeader(props) {
    const navigation=useNavigation()
    const{txt}=props
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={imagePath.back} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.txt}>{txt}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.textBlue,
        height:50,
        flexDirection:'row'
    },
    img:{
        width:40,
        height:40,
        marginTop:6,
        marginLeft:10
    },
    txt:{
        color:colors.white,
        fontSize:20,
        marginLeft:30,
        marginTop:10
    }
})