import * as React from 'react';
import {View,Text,TextInput,StyleSheet,Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ReplyScreen extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.navigation.getParam('details')["randomId"])
        this.state={
            reply:'',
            userId:firebase.auth().currentUser.email,
            randomId:this.props.navigation.getParam('details')["randomId"],
            question:this.props.navigation.getParam('details')["question"],
        }
    }

    replyQuestion=()=>{
        db.collection("reply").add({
            reply:this.state.reply,
            userId:this.state.userId,
            randomId:this.state.randomId,
        })
        this.setState({
            reply:'',
        })
        this.props.navigation.navigate("PostScreen")
    }

    render(){
        return(
            <View>
                <Text>
                    Reply Screen
                </Text>
                <Text>
                    {this.state.question}
                </Text>
               <TextInput
                    placeholder="Reply"
                    onChangeText={(text)=>{
                        this.setState({
                            reply:text
                        })
                    }}
                    style={styles.formInput}
               />
               <TouchableOpacity
                    onPress={()=>{
                        this.replyQuestion();
                        Alert.alert("Replied Successfully!!")
                    }}
               >
                   <Text>
                       Submit
                   </Text>
               </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "grey",
        paddingBottom: RFValue(10),
        marginLeft: RFValue(20),
        marginBottom: RFValue(14)
      },
})