import * as React from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

  export default class SearchScreen extends React.Component{
    constructor(){
        super()
        this.state = {
          requestedPostList : []
        }
        this.requestPost= null
      }

      getRequestedPostList=()=>{
          this.requestPost=db.collection('posts').onSnapshot((snapshot)=>{
               var requestedPostList = snapshot.docs.map(document=>document.data())
               this.setState({
                   requestedPostList:requestedPostList,
               })
          })
      }

      componentDidMount=()=>{
          this.getRequestedPostList();
      }

      keyExtractor = (item, index) => index.toString()
      renderItem = ({item,i})=>{
          console.log(item + "HIHH");
          return(
              <ListItem
                key={i}
                title={item.question}
                subtitle={item.description}
                titleStyle={{ color: "black", fontWeight: "bold" }}
                rightElement={
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        this.props.navigation.navigate("ReplyScreen", {
                          details: item,
                        });
                      }}
                    >
                      <Text style={{ color: "#ffff" }}>Reply</Text>
                    </TouchableOpacity>
                  }
                  bottomDivider
              />
          );
      }

    render(){
        return(
            <View style={styles.view}>
                <View style={{ flex: 1 }}>
                    {this.state.requestedPostList.length === 0 ? (
                <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20 }}>List Of All Questions</Text>
                </View>
                    ) : (
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.requestedPostList}
                    renderItem={this.renderItem}
                />
            )}
                </View>
        </View>
        )
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