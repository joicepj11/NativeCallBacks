import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  NativeModules,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

//obtaining native code (java class) reference 
const Message = NativeModules.Message;

export default class App extends Component {

  state = {
    message : "first message",
    name : null,
    greeting: ' '
  }
  onButtonPress = () => {
    const state = this.state ;
    Message.displayGreetingMessage(state.name , this.displayResultCallback)
  }

  displayResultCallback = (result) =>{
    this.setState({greeting:result})
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <TextInput
        style = {styles.textInput}
        placeholder={"enter some text"}
        
        onChangeText = {(text) => {
          this.setState({name : text})
        }}
        />

        <Button title={"get message from native callbacks"}
        style = {styles.buttonItem }
        onPress= {this.onButtonPress}
        />

        <Text style = {styles.welcome}>
          Response From Callback : {this.state.greeting}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonItem: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput:{
    flex:0,
    width:200,
    height:64,
    fontSize:18,
    color:'black'
  }
});
