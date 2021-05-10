import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';
import ReplyScreen from '../screens/ReplyScreen';

export const AppStackNavigator = createStackNavigator({
    SearchScreen : {
      screen : SearchScreen,
      navigationOptions:{
        headerShown : false
      }
    },
    ReplyScreen : {
      screen : ReplyScreen,
      navigationOptions:{
        headerShown : false
      }
    },
  
  },
    {
      initialRouteName: 'SearchScreen'
    }
  );