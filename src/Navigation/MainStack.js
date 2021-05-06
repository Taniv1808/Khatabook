import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { AddAccount, AddCustomer, EditProfile, HomePage, Money, More } from '../Screen'
import BottomTabNavigator from './TabRoutes'
export default function(Stack){
    return(
        <>
        <Stack.Screen
        name={navigationStrings.HOMEPAGE}
        component={BottomTabNavigator}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.MONEY}
        component={Money}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.MORE}
        component={More}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.ADD_CUSTOMER}
        component={AddCustomer}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfile}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.ADD_ACCOUNT}
        component={AddAccount}
        options={{headerShown:false}}
        />

        </>
    )
}