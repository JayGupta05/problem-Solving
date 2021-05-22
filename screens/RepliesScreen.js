import * as React from 'react';
import {View,Text,TouchableOpacity,FlatList,StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements'
import db from '../config';
import firebase from 'firebase';

export default class RepliesScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            randomId:this.props.navigation.getParam('details')["randomId"],
            replies:[],
            question:this.props.navigation.getParam('details')["question"],
            description:this.props.navigation.getParam("details")["description"],
        }
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({item,i})=>{
        return(
          <ListItem bottomDivider topDivider>
            <ListItem.Content>
              <ListItem.Title>
              {item.reply}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        );
    }

    componentDidMount=()=>{
        this.getreplies();
    }

    getreplies=()=>{
        db.collection("reply").where("randomId",'==',this.state.randomId).onSnapshot(snapshot=>{
            var replies = [];
            snapshot.docs.map(doc => {
              var r = doc.data();
              replies.push(r);
            });
            this.setState({
              replies: replies
            });
            console.log(this.state.replies);
        })    
    }

    render(){
        return(
            <View style={styles.view}>
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
                        paddingLeft:80,
                       }}
                    >
                        {this.state.question}
                    </Text>
                    <Text
                      style={{
                        fontSize:20,
                        justifyContent:'center',
                        alignItems:'center'
                       }}
                    >
                        {this.state.description}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    {this.state.replies.length === 0 ? (
                <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20 }}>List Of All Replies</Text>
                </View>
                    ) : (
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.replies}
                    renderItem={this.renderItem}
                />
            )}
                </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    subContainer: {
      flex: 1,
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
    },
    view:{
      flex: 1,
      backgroundColor: "#fff"
    }
  });