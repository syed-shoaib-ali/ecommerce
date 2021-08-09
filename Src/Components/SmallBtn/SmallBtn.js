import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Style';

export default class SmallButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={this.props.onPress}>
        <Text style={{fontSize: 11, color: '#ffffff'}}>{this.props.txt}</Text>
      </TouchableOpacity>
    );
  }
}
