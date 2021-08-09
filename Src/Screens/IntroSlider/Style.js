import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Theme from '../../Utils/Theme';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: Theme.primary},
  picContainer: {
    backgroundColor: '#ffffff',
    marginTop: '20%',
    width: wp('85%'),
    alignSelf: 'center',
    height: hp('45%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: height / 8,
    padding: 10,
  },
  headingAndTxtContainer: {padding: '5%', marginTop: '10%'},
  headingTxt: {
    color: '#ffffff',
    fontFamily: 'Gilroy-ExtraBold',
    // fontWeight: 'bold',
    fontSize: hp('2%'),
  },
  simpleTxt: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 20,
    fontFamily: 'Gilroy-Light',
    fontSize: hp('1.5%'),
  },
  mainContainerOfPagination: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp('5%'),

    left: 20,
  },
  selectedPagination: {
    height: 20,
    width: 5,
    // borderTopStartRadius: 2.5,
    borderRadius: 2.5,
    backgroundColor: '#FF9830',
    position: 'absolute',
    bottom: 0,
  },
  unSelectedPagination: {
    marginStart: 10,
    height: 14,
    width: 5,
    borderRadius: 2.5,
    // borderTopStartRadius: 2.5,
    // borderTopEndRadius: 2.5,
    backgroundColor: '#858381',
    position: 'absolute',
    bottom: 0,
  },
});
export default styles;
