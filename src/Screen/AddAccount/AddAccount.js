import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackToPageHeader from '../../Component/BackToPageHeader'
import strings from '../../constants/lang'

export default class AddAccount extends Component {
    render() {
        return (
            
            <View>
                <BackToPageHeader txt={strings.ADD_ACCOUNT}/>
            </View>
        )
    }
}
