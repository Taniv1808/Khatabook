import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { Login, OtpVerification, OuterPage, OuterScreen } from '../Screen'

export default function(Stack){
    return(
        <>
        <Stack.Screen
        name={navigationStrings.OUTERSCREEN}
        component={OuterScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.OUTERPAGE}
        component={OuterPage}
        options={{headerShown:false}}/>
        <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown:false}}/>
        
        </>
    )
}