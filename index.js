import React, { Component } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import PropTypes from 'prop-types';

export default class ModalNestedModal extends Component {

    static propTypes = {
        ...View.propTypes,
        colorDim: PropTypes.string,
        alphaDim: PropTypes.number,
        visible: PropTypes.bool,
        onRequestClose: PropTypes.func,
        canceledOnTouchOutside: PropTypes.bool
    };

    static defaultProps = {
        colorDim: 'rgb(0, 0, 0)',
        alphaDim: 0.9,
        visible: true,
        onRequestClose: () => {},
        canceledOnTouchOutside: true
    };


    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: this.props.visible,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({visible: nextProps.visible})
      }


    render() {
        return (this.state.visible ? <View style={[styles.parent]}>
                <TouchableWithoutFeedback style={styles.parent}
                    onPress={() => { 
                        if(this.props.canceledOnTouchOutside){
                            this.setState({visible: !this.state.visible})
                            this.props.onRequestClose();
                        }
                    }}>
                    <View style={[styles.parent, { opacity: this.props.alphaDim, backgroundColor: this.props.colorDim}]}/>
                    </TouchableWithoutFeedback>
                {this.props.children}
            </View> : null);
    }
}


var styles = StyleSheet.create({
    parent: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems:'center',
        justifyContent:'center'
    }
  });