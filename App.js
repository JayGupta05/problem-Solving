import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './components/bottomTabNavigator';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppDrawerNavigator} from './components/drawerNavigator';
console.disableYellowBox = true;

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Screen:{screen:AppDrawerNavigator},
})

const AppContainer = createAppContainer(SwitchNavigator);