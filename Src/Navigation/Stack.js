import React, {Component} from 'react';
import {View, StatusBar, SafeAreaView, LogBox} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens Imported
import Home from '../Screens/Home/Home';
import Theme from '../Utils/Theme';
import IntroSlider from '../Screens/IntroSlider/IntroSlider';
import SignUp from '../Screens/SignUp/SignUp';
import SignIn from '../Screens/SignIn/SignIn';
import BottomTab from './BottomTabs';

const Stack = createStackNavigator();
class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          {Platform.OS === 'ios' ? (
            <StatusBar
              barStyle="light-content"
              backgroundColor={Theme.primary}
            />
          ) : (
            <StatusBar
              barStyle="light-content"
              backgroundColor={Theme.primary}
            />
          )}
        </View>

        <Stack.Navigator initialRouteName="IntroSider" headerMode="none">
          <Stack.Screen name="Home" component={BottomTab} />
          <Stack.Screen name="IntroSider" component={IntroSlider} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </SafeAreaView>
    );
  }
}

export default Navigation;
