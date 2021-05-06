import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'

export default function BottomTitle(props) {
  const{img,txt,txt1}=props
    return (
        <View style={styles.container}>
          <Image
            source={img}
            style={styles.img}
          />

          <View style={styles.main}>
            <Text style={styles.txt}>
              {txt}
            </Text>
            <Text style={styles.txt2}>{txt1}</Text>
          </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:70, 
        flexDirection: 'row',
        height:70
    },
    img:{
        width: 60, 
        height: 60, 
        marginLeft: 40,
        marginTop:5
    },
    main:{
        flexDirection: 'column'
    },
    txt:{
        marginLeft: 10, 
        marginTop: 10, 
        color: colors.textGrey
    },
    txt2:{
        marginLeft: 10,
        color:colors.textGrey
    }
})