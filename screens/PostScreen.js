import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  console.disableYellowBox = true;
  import firebase from 'firebase';
  import db from '../config';

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
                <Text>
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
                />
                <TextInput
                    placeholder="Description!!"
                    multiline={true}
                    onChangeText={(text)=>{
                        this.setState({
                            description:text
                        })
                    }}
                />
                <TouchableOpacity
                 onPress={()=>{
                     this.postQuestion();
                     Alert.alert("Posted Question!!")
                 }}
                >
                    <Text>
                        Post
                    </Text>
                </TouchableOpacity>
            </View>
        )
    } 
 } 