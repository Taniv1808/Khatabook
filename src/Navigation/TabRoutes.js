import React from 'react'
import { Image } from 'react-native'
import navigationStrings from '../constants/navigationStrings'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomePage, Money, More} from '../Screen/index'

const Tab=createBottomTabNavigator()

export default function BottomTabNavigator(){
    return(
        <Tab.Navigator 
        initialRouteName={navigationStrings.HOMEPAGE}
        activeColor="#ff3f6c"
        barStyle={{
            backgroundColor:'white'
        }}>
            <Tab.Screen 
            name={navigationStrings.HOMEPAGE}
            component={HomePage}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor }) => {
                  return <Image source={require('../assets/images/home.png')} style={{width:30,height:30}}/>
              }              
              }}/>
              <Tab.Screen 
            name={navigationStrings.MONEY}
            component={Money}
            options={{
                tabBarLabel: 'Money',
                tabBarIcon: ({tintColor }) => {
                  return <Image source={require('../assets/images/rupee.png')} style={{width:30,height:30}}/>
              }              
              }}/>
              <Tab.Screen 
            name={navigationStrings.MORE}
            component={More}
            options={{
                tabBarLabel: 'More',
                tabBarIcon: ({tintColor }) => {
                  return <Image source={require('../assets/images/more.png')} style={{width:30,height:30}}/>
              }              
              }}/>
        </Tab.Navigator>
    )
}