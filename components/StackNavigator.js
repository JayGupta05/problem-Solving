import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';
import ReplyScreen from '../screens/ReplyScreen';
import RepliesScreen from '../screens/RepliesScreen';

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
    RepliesScreen : {
      screen : RepliesScreen,
      navigationOptions:{
        headerShown : false
      }
    },
  },
    {
      initialRouteName: 'SearchScreen'
    }
  );