import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import {createStackNavigator}  from '@react-navigation/stack'


const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
        {AuthStack(Stack)}
        {MainStack(Stack)}  
      </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes