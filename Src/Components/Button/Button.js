import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Style';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={this.props.onPress}>
        <Text style={{fontSize: 11}}>Start Selling Now</Text>
      </TouchableOpacity>
    );
  }
}
