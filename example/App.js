/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';

import ModalNestedModal from './ModalNestedModal';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {


  constructor(props, context) {
    super(props, context);
    this.state = {
        visible: true,
    };
}


  render() {
    return (
      <View style={styles.container}>
        <ModalNestedModal alphaDim={0.5} visible={this.state.visible} canceledOnTouchOutside={true} onRequestClose={() => { this.setState({visible: !this.state.visible}) }}>
          <View style={styles.modalContent}><Text>CCCC</Text></View>
        </ModalNestedModal>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <Button
        title="Press Me"
        onPress={() => { 
          this.setState({visible: !this.state.visible});
        }}
      />

        
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  modalContent: {
    elevation: 7,
    borderRadius: 7,
    width: 280,
    height: 160,
    backgroundColor: 'white',
    paddingLeft: 23,
    paddingTop: 30,
    paddingRight: 22,
    paddingBottom: 14
  }
});
