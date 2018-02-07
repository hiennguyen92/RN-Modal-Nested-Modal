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
  TouchableOpacity
} from 'react-native';

import ModalNestedModal from 'rn-modal-nested-modal';

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
      visibleC: true,
      visibleD: true,
    };
  }



  render() {
    return (
      <View style={styles.container}>
        <ModalNestedModal alphaDim={0.5} colorDim={"#000000"} isTop={true} visible={this.state.visibleD} onRequestClose={() => { }} onTouchOutside={() => { this.setState({ visibleD: !this.state.visibleD }) }}>
          <View style={[styles.modalContainer]}>
          <Text style={styles.modalTitle}>Dialog Answer</Text>
          <Text style={styles.modalContent}>I'm fine</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <TouchableOpacity style={{ padding: 8 }} onPress={() => { this.setState({ visibleD: !this.state.visibleD }) }}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ModalNestedModal>
      <ModalNestedModal alphaDim={0.5} colorDim={"#000000"} visible={this.state.visibleC} onRequestClose={() => { }} onTouchOutside={() => { this.setState({ visibleC: !this.state.visibleC }) }}>
        <View style={[styles.modalContainerTest]}>
          <Text style={styles.modalTitle}>Dialog Question</Text>
          <Text style={styles.modalContent}>How are you?</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <TouchableOpacity style={{ padding: 8 }} onPress={() => { this.setState({ visibleC: !this.state.visibleC }) }}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
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

      <TouchableOpacity onPress={() => {
        this.setState({ visibleC: !this.state.visibleC, visibleD: !this.state.visibleD });
      }}>
        <Text style={{ color: 'blue' }}>Press Me</Text>
      </TouchableOpacity>


      </View >
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

  modalContainerTest: {
    elevation: 7,
    borderRadius: 7,
    width: 300,
    height: 200,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  },

  modalContainer: {
    elevation: 7,
    borderRadius: 7,
    width: 280,
    height: 160,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  },

  modalTitle: {
    fontSize: 18,
    color: '#212121',
    alignSelf: 'center'
  },
  modalContent: {
    fontSize: 14,
    color: '#212121',
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1
  },
  modalButtonText: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.87)',
    lineHeight: 20,
    letterSpacing: 0.5
  },
});
