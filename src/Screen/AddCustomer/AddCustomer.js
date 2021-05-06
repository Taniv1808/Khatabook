import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import BackToPageHeader from '../../Component/BackToPageHeader'
import strings from '../../constants/lang'


export default class AddCustomer extends Component {
    render() {
        return (
            <View>
                <BackToPageHeader txt={strings.ADD_CUSTOMER_FROM_CONTACTS}/>
            </View>
        )
    }
}
