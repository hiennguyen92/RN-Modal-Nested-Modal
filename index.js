import React, { Component } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import PropTypes from 'prop-types';

export default class ModalNestedModal extends Component {

    static propTypes = {
        ...View.propTypes,
        colorDim: PropTypes.string,
        alphaDim: PropTypes.number,
        zIndex: PropTypes.number,
        isTop: PropTypes.bool,
        visible: PropTypes.bool,
        onRequestClose: PropTypes.func,
        onTouchOutside: PropTypes.func
    };

    static defaultProps = {
        colorDim: 'rgb(0, 0, 0)',
        alphaDim: 0.5,
        zIndex: 1,
        isTop: false,
        visible: true,
        onRequestClose: () => {},
        onTouchOutside: () => {}
    };


    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: this.props.visible,
            zIndex: this.props.zIndex,
            isTop: this.props.isTop
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.visible && !nextProps.visible){
            this.props.onRequestClose();
        }
        this.setState({visible: nextProps.visible})
      }


    render() {
        return (this.state.visible ? <View style={[styles.parent, {zIndex: this.state.isTop ? Number.MAX_SAFE_INTEGER : this.state.zIndex}]}>
                <TouchableWithoutFeedback style={[styles.parent, {zIndex: this.state.isTop ? Number.MAX_SAFE_INTEGER : this.state.zIndex}]}
                    onPress={() => { 
                        this.props.onTouchOutside();
                    }}>
                    <View style={[styles.bgBlack, { opacity: this.props.alphaDim, backgroundColor: this.props.colorDim}]}/>
                </TouchableWithoutFeedback>
                <View style={{zIndex: this.state.isTop ? Number.MAX_SAFE_INTEGER : this.state.zIndex}}>{this.props.children}</View>
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
    },
    bgBlack: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems:'center',
        justifyContent:'center'
    }
  });