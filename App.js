import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routes from './src/Navigation/Routes'
import SplashScreen from 'react-native-splash-screen'
import FlashMessage from 'react-native-flash-message'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default class App extends Component {
  componentDidMount=()=>{
    SplashScreen.hide()
  }
  render() {
    return (
      
        <Provider store={store}>
          <Routes/>
         <FlashMessage position='top'/>
         </Provider>
      
    )
  }
}
