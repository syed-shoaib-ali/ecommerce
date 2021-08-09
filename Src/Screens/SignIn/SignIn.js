import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import SmallButton from '../../Components/SmallBtn/SmallBtn';
import TxtInput from '../../Components/TxtInput/TxtInput';
import Logo from '../../assets/svgs/logo';
export default class SignIn extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <View style={{alignSelf: 'center', margin: '5%'}}>
          <Logo />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            flex: 1,
            marginTop: '40%',
            width: '100%',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          }}></View>
        <View
          style={{
            backgroundColor: '#ffffff',
            position: 'absolute',
            height: '85%',
            bottom: 0,
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            alignSelf: 'center',
            width: '85%',
            zIndex: 9999,
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 40,
              height: '70%',
              elevation: 5,
              width: '100%',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                margin: '10%',
                fontSize: 20,
                color: '#707070',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Sign In
            </Text>
            <View style={{paddingStart: 10, paddingEnd: 10}}>
              <TxtInput placeHolder={'Email ID:'} />
              <TxtInput placeHolder={'Password:'} />
              <View
                style={{
                  alignSelf: 'flex-end',
                  width: '30%',
                }}>
                <TouchableOpacity
                  style={{
                    height: 25,
                    backgroundColor: '#ffffff',
                    elevation: 5,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontSize: 4}}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
              <SmallButton txt={'Sign In'} />
              <Text
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={{
                  alignSelf: 'center',
                  marginTop: '5%',
                  fontSize: hp('1.2%'),
                }}>
                {'Already have an Account....? Sign Up'}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '10%',
            }}>
            <View
              style={{width: '35%', height: 1, backgroundColor: '#707070'}}
            />
            <Text style={{color: '#707070', fontSize: hp('1.5%')}}>
              Sign In with
            </Text>
            <View
              style={{width: '35%', height: 1, backgroundColor: '#707070'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              width: '50%',
              justifyContent: 'space-between',
              marginTop: '5%',
            }}>
            <Image
              style={{height: hp('5%'), width: widthPercentageToDP('10%')}}
              source={require('../../assets/facebook.png')}
            />
            <Image
              style={{height: hp('5%'), width: widthPercentageToDP('10%')}}
              source={require('../../assets/twitter.png')}
            />
            <Image
              style={{height: hp('5%'), width: widthPercentageToDP('10%')}}
              source={require('../../assets/gmail.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}
