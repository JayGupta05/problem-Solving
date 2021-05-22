import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
  } from "react-native";
  console.disableYellowBox = true;
  import firebase from 'firebase';
  import db from '../config';
  import { RFValue } from "react-native-responsive-fontsize";

  export default class PostScreen extends React.Component{
    constructor(){
        super();
        this.state={
            question:"",
            userId:firebase.auth().currentUser.email,
            description:'',
        }
    }

    createUniqueId=()=>{
        return(
            Math.random().toString(36).substring(7)
        )
    }

    postQuestion=()=>{
        db.collection('posts').add({
            userId:this.state.userId,
            question:this.state.question,
            randomId:this.createUniqueId(),
            description:this.state.description,
        })
        this.setState({
            question:'',
            description:'',
        })
    }

    render(){
        return(
            <View>
                <Text
                    style={{
                     justifyContent:'center',
                     fontSize:20,
                     alignItems:'center',
                     marginTop:20,
                     backgroundColor: "#32867d",
                     height:50,
                     padding:10,
                     paddingLeft:50,
                    }}
                >
                    Post your problems!!!!
                </Text>
                <TextInput
                 placeholder="Type Your Question Here!!"
                 maxLength={50}
                 onChangeText={(text)=>{
                    this.setState({
                        question:text,
                    })
                 }}
                 style={styles.formTextInput}
                />
                <TextInput
                    placeholder="Description!!"
                    multiline={true}
                    onChangeText={(text)=>{
                        this.setState({
                            description:text
                        })
                    }}
                    style={styles.formTextInput2}
                />
                <TouchableOpacity
                 onPress={()=>{
                     this.postQuestion();
                     Alert.alert("Posted Question!!")
                 }}
                 style={styles.button}
                >
                    <Text>
                        Post
                    </Text>
                </TouchableOpacity>
            </View>
        )
    } 
 } 

 const styles = StyleSheet.create({
    subContainer: {
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
      width: 100,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      marginLeft:110,
      marginTop:20,
    },
    view:{
      flex: 1,
      backgroundColor: "#fff"
    },
    formTextInput: {
        width: "75%",
        height: RFValue(45),
        borderWidth: 1,
        padding: 10,
        marginLeft:45,
        marginTop:25,
      },
      formTextInput2: {
        width: "75%",
        height: RFValue(45),
        borderWidth: 1,
        padding: 10,
        marginLeft:45,
        marginTop:5,
      },
  });