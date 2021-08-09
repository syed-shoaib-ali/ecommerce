import {StyleSheet, Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Theme from '../../Utils/Theme';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#000000'},
  containerForPicAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5%',
    // backgroundColor: 'red',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    borderWidth: 0.5,
    borderColor: '#ffffff',
  },
  containerForRating: {flexDirection: 'row', alignItems: 'center'},
  txtRating: {color: 'white', fontSize: hp('1.2'), marginStart: 5},
  contentContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    overflow: 'hidden',
  },
  headerForContentContainer: {
    height: hp('8%'),
    backgroundColor: '#D7DADC',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingTop: '5%',
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  earningContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartContainer: {
    paddingEnd: '5%',
    height: hp('35%'),
    backgroundColor: '#ffffff',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    overflow: 'hidden',
    //test

    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  salesAndReturnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eachSale: {
    width: '40%',
    // overflow: 'hidden',
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  containerOfSaleAndBar: {
    flexDirection: 'row',
    alignItems: 'center',
    //     width: '80%',
    //   justifyContent: 'space-between',
  },
  bar: {
    width: wp('8%'),
    height: hp('1%'),
    borderRadius: 10,
    //   height: item.up,
    backgroundColor: 'black',
    //   marginEnd: 10,
    //   borderTopStartRadius: 5,
    //   borderTopEndRadius: 5,
  },
  txtOfSalesAndReturn: {color: '#9B9090', marginEnd: 5, fontSize: hp('1.8%')},
  txtHeading: {margin: '5%', fontWeight: 'bold'},
  containerOfProductFlatList: {
    // paddingStart: '5%',
    // paddingTop: '5%',
    // paddingBottom: '5%',
    // height: height / 3,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ECEDEE',
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
  },
  containerOfManagementBtns: {
    marginStart: '5%',
    marginEnd: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eachManagementBtn: {
    backgroundColor: '#ffffff',
    padding: 5,
    alignItems: 'center',
    width: '25%',
    height: 75,
    elevation: 2,
    borderRadius: 10,
    justifyContent: 'center',
  },
  txtOfManagementBtn: {fontSize: 8, marginTop: '10%', color: '#9B9090'},
});
export default styles;
