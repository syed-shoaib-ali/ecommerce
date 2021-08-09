import React, {Component} from 'react';
import {FlatList, View, Text, Image, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');
import Rating from '../../../assets/svgs/orderLogo';
export default class ProductFlatList extends Component {
  renderProducs = ({item, index}) => {
    return (
      <View style={{}}>
        <View
          style={{
            width: wp('40%'),
            // height: item.up,
            height: hp('25%'),
            backgroundColor: '#ffffff',
            marginEnd: 20,
            borderRadius: 20,
            elevation: 5,
            // marginBottom: 10,
            alignItems: 'center',
            overflow: 'hidden',
            // justifyContent: 'center',
            // borderTopStartRadius: 5,
            // borderTopEndRadius: 5,
          }}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: '#ffffff',
              shadowColor: '#000000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
              width: wp('40%'),
              height: hp('14%'),
            }}>
            <Image
              style={{
                width: wp('40%'),
                height: hp('14%'),
                resizeMode: 'cover',
                borderRadius: 20,
              }}
              source={item.image}
            />
          </View>
          <Text
            style={{
              color: '#232F3F',
              fontWeight: 'bold',
              marginTop: '5%',
              fontSize: hp('1.5%'),
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: '#232F3F',
              fontWeight: 'bold',
              fontSize: hp('1.5%'),
            }}>
            {`$ ${item.price}`}
          </Text>
          <View style={{margin: '5%'}}>
            <Rating />
          </View>
          {/* <Image
            style={{margin: '5%'}}
            source={require('../../../assets/rating.png')}
          /> */}
        </View>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        //   style={{marginTop: '30%'}}
        contentContainerStyle={{
          paddingStart: '5%',
          paddingBottom: '5%',
          paddingTop: '5%',
        }}
        data={this.props.products}
        renderItem={this.renderProducs}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}
