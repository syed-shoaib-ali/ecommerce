import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TxtInput from '../../Components/TxtInput/TxtInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SmallButton from '../../Components/SmallBtn/SmallBtn';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const countries = ['Punjab', 'Sindh', 'Khybar', 'Gilgit'];
import Logo from '../../assets/svgs/logo';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continue: false,
      isVisible: false,
    };
  }
  renderIcon = () => {
    return (
      <FontAwesome
        style={{bottom: 3}}
        size={15}
        name={'sort-down'}
        color={'#737373'}
      />
    );
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({isVisible: false})}
          animationIn={'bounceIn'}
          animationOut={'bounceOut'}>
          {this.state.continue == false ? (
            <View
              style={{
                height: '40%',
                width: '95%',
                borderRadius: 30,
                backgroundColor: '#ffffff',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  margin: '10%',
                  fontSize: hp('2%'),
                  color: '#232F3F',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                What do you want to sell?
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#D1DEE5',
                  width: '85%',
                  alignSelf: 'center',
                  height: hp('5.5%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  elevation: 2,
                }}>
                <Text style={{color: '#232F3F', fontSize: hp('1.5%')}}>
                  Service
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  width: '85%',
                  alignSelf: 'center',
                  height: hp('5.5%'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginTop: '5%',
                  elevation: 2,
                }}>
                <Text style={{color: '#232F3F', fontSize: hp('1.5%')}}>
                  Products
                </Text>
              </TouchableOpacity>
              <SmallButton
                txt={'Continue'}
                onPress={() => this.setState({continue: true})}
              />
            </View>
          ) : (
            <View
              style={{
                height: '40%',
                width: '95%',
                borderRadius: 30,
                backgroundColor: '#ffffff',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: '10%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <IonIcons
                  name="arrow-back"
                  color={'#707070'}
                  size={20}
                  onPress={() => this.setState({continue: false})}
                />
                <Text
                  style={{
                    // alignSelf: 'center',

                    fontSize: hp('2%'),
                    color: '#232F3F',
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  Subscription
                </Text>
                <IonIcons name="arrow-back" color={'transparent'} size={20} />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#D1DEE5',
                  width: '85%',
                  alignSelf: 'center',
                  height: hp('5.5%'),
                  alignItems: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 20,
                  elevation: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#232F3F', fontSize: hp('1.5%')}}>
                  Standard
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#232F3F', fontSize: 10}}>$9.99</Text>
                  <Text
                    style={{color: '#AFB5B8', fontSize: 10, marginStart: 5}}>
                    Per Month
                  </Text>
                  <AntDesign name={'check'} size={14} color={'#FF9830'} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  //   backgroundColor: '#D1DEE5',
                  width: '85%',
                  alignSelf: 'center',
                  height: hp('5.5%'),
                  alignItems: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 20,
                  //   elevation: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '5%',
                }}>
                <Text style={{color: '#232F3F', fontSize: hp('1.5%')}}>
                  Premium
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: '#232F3F', fontSize: 10}}>$9.99</Text>
                  <Text
                    style={{color: '#AFB5B8', fontSize: 10, marginStart: 5}}>
                    Per Month
                  </Text>
                  <AntDesign name={'check'} size={14} color={'#231F20'} />
                </View>
              </TouchableOpacity>
              <SmallButton
                txt={'Continue'}
                onPress={() => {
                  this.setState({isVisible: false});
                  this.props.navigation.navigate('Home');
                }}
              />
            </View>
          )}
        </Modal>
        {/* <Image
          style={{alignSelf: 'center', margin: '5%'}}
          source={require('../../assets/royalLogo.png')}
        /> */}
        <View style={{alignSelf: 'center', margin: '5%'}}>
          <Logo />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            flex: 1,
            width: '95%',
            alignSelf: 'center',
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            padding: 10,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              margin: '10%',
              fontSize: 20,
              color: '#707070',
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Start Selling
          </Text>
          <TxtInput placeHolder={'Your Shop Name:'} />
          <TxtInput placeHolder={'Mobile No:'} type={'phone-pad'} />
          <TxtInput placeHolder={'Business Address (Optional)'} />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              //   backgroundColor: 'red',
              alignItems: 'center',
            }}>
            <TxtInput placeHolder={'City:'} width={'60%'} />
            {/* <TxtInput placeHolder={'State:'} width={'30%'} /> */}
            <View
              style={{
                backgroundColor: '#ffffff',
                elevation: 5,
                borderRadius: 15,
                // paddingLeft: 10,
                marginBottom: '5%',
                width: '30%',
                height: hp('5%'),
                justifyContent: 'center',
                //   height: '10%',
              }}>
              <SelectDropdown
                data={countries}
                buttonTextStyle={{
                  fontSize: 12,
                  color: '#BABABA',
                }}
                defaultButtonText="State:"
                renderDropdownIcon={this.renderIcon}
                buttonStyle={{
                  width: 80,
                  height: 20,
                  backgroundColor: 'transparent',
                }}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '5%',
            }}>
            <AntDesign name="checkcircle" color="#000000" size={11.5} />
            <Text
              style={{fontSize: hp('1.2%'), marginStart: 10, color: '#707070'}}>
              {'Agreeing the BLIXUR terms and condition and privacy policy'}{' '}
            </Text>
          </View>
          <SmallButton
            txt={'Submit'}
            onPress={() => this.setState({isVisible: true})}
          />
          <Text
            onPress={() => this.props.navigation.navigate('SignIn')}
            style={{
              alignSelf: 'center',
              marginTop: '5%',
              fontSize: hp('1.2%'),
            }}>
            {'Already have an Account....? Sign In'}
          </Text>
        </View>
      </View>
    );
  }
}
