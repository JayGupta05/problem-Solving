import React, { Component} from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {Avatar} from 'react-native-elements';
import {Icon} from "react-native-elements"
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";

export default class CustomSideBar extends Component{
    constructor(){
      super();
      this.state = {
        name: "",
        docId: "",
      };
    }
      render(){
          return(
              <View style={{flex:1}}>
              <View
            style={{
              flex: 0.5,
  
              alignItems: "center",
              backgroundColor: "#32867d",
            }}
          >            
          </View>
                  <View style={styles.drawerItemsContainer}>
                  <DrawerItems {...this.props}/>
                  </View>
                  <View style={styles.logOutContainer}>
                  <TouchableOpacity style={styles.logOutButton}
                  onPress = {() => {
                      this.props.navigation.navigate('WelcomeScreen')
                      //firebase.auth().signOut()
                  }}>
                  <Icon
                name="logout"
                type="antdesign"
                size={RFValue(20)}
                iconStyle={{ paddingLeft: RFValue(10) }}
              />
                      <Text
                style={{
                  fontSize: RFValue(15),
                  fontWeight: "bold",
                  marginLeft: RFValue(30),
                }}
              >
                Log Out
              </Text>
                  </TouchableOpacity>
                  </View>
              </View>
          )
      }
  }
  
  var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerItemsContainer: {
      flex: 0.8,
    },
    logOutContainer: {
      flex: 0.2,
      justifyContent: "flex-end",
      paddingBottom: 30,
    },
    logOutButton: {
      height: 30,
      width: "100%",
      justifyContent: "center",
      padding: 10,
    },
    imageContainer: {
      flex: 0.75,
      width: "40%",
      height: "20%",
      marginLeft: 20,
      marginTop: 30,
      borderRadius: 40,
    },
    logOutText: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });