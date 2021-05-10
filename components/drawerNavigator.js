import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {AppTabNavigator} from './bottomTabNavigator'
import SettingScreen from '../screens/SettingScreen';
import {Icon} from "react-native-elements";
import CustomSideBar from './customSidebar'

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
      screen: AppTabNavigator,
      navigationOptions:{
        drawerIcon : <Icon name="home" type ="fontawesome5" />
      }
          },
    Settings :{
      screen: SettingScreen,
      navigationOptions:{
        drawerIcon : <Icon name="settings" type ="fontawesome5" />,
        drawerLabel : "Settings"
      }
    },    
  },
    {
    contentComponent: CustomSideBar,
    },
    {
        initialRouteName : 'Home'
  });