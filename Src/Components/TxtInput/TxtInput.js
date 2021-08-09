import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class TxtInput extends Component {
  render() {
    return (
      <TextInput
        style={{
          backgroundColor: '#ffffff',
          elevation: 5,
          borderRadius: 15,
          paddingLeft: 10,
          marginBottom: '5%',
          width: this.props.width,
          height: hp('5%'),
          fontSize: hp('1.5%'),
          backgroundColor: 'white',
        }}
        placeholder={this.props.placeHolder}
        placeholderTextColor={'#BABABA'}
        keyboardType={this.props.type}
      />
    );
  }
}
