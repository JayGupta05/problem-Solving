import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PostScreen from '../screens/PostScreen';
import SearchScreen from '../screens/SearchScreen';
import {AppStackNavigator} from './StackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
    PostScreen : {
      screen: PostScreen,
      navigationOptions :{
        tabBarLabel : "Post",
      }
    },
    SearchScreen: {
      screen: AppStackNavigator,
      navigationOptions :{
        tabBarLabel : "Search",
      }
    }
  });