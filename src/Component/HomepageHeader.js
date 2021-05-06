import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import colors from '../styles/colors'

export default function HomepageHeader(props) {
    const{text,img}=props
    return (
        <View style={styles.container}>
        <View style={styles.main}>
            <Text style={styles.txt}>{text}</Text>
            <Image source={img} style={styles.img}/>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.textBlue,
        height:120,
        width:360
    },
    main:{
        flexDirection:'row'
    },
    img:{
        width:30,
        height:30,
        marginLeft:220,
        marginTop:20
    },
    txt:{
        fontSize:20,
        color:colors.white,
        marginLeft:20,
        marginTop:20
    }
})