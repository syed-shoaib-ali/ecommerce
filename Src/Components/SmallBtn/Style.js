import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Utils/Theme';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  touchableContainer: {
    marginTop: '10%',
    borderRadius: 20,
    width: '35%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 25,
  },
});
export default styles;
