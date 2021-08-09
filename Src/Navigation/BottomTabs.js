import React from 'react';
import {View, StyleSheet, Image, SafeAreaView, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../Screens/Home/Home';
import Theme from '../Utils/Theme';

const Tab = createBottomTabNavigator();
const BottomTab = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        if (route.name === 'Homes') {
          return (
            <AntDesign
              // style={styles.iconStyle}
              name="home"
              size={15}
              color={color}
            />
          );
        }
        if (route.name === 'message') {
          return (
            <MaterialCommunityIcons
              // style={styles.iconStyle}
              name="email-outline"
              size={15}
              color={color}
            />
          );
        }
        if (route.name === 'profile') {
          return (
            <IonIcon
              // style={styles.iconStyle}
              name="person-outline"
              size={15}
              color={color}
            />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: Theme.primary,
      inactiveTintColor: '#8B8B8B',
      keyboardHidesTabBar: true,

      // tabStyle:{borderRadius:20,backgroundColor:'red',height:60},

      style: {
        backgroundColor: '#ffffff',
        height: 40,
        //   width: '95%',
        //   alignSelf: 'center',
        //   bottom: 5,
        //   borderRadius: 20,
        //   height: Platform.OS == 'ios' ? 70 : 70,
        //   paddingTop: Platform.OS == 'ios' ? 20 : 0,
      },
      //   labelStyle: {fontWeight: 'bold', top: Platform.OS == 'ios' ? 20 : 0},
    }}>
    <Tab.Screen name="Homes" component={Home} options={{tabBarLabel: 'Home'}} />
    <Tab.Screen name="message" component={Home} />
    <Tab.Screen name="profile" component={Home} />
    {/* <Tab.Screen name="message" component={Home} /> */}
  </Tab.Navigator>
);

export default BottomTab;
const styles = StyleSheet.create({
  mainViewOfEachTab: {
    // backgroundColor: color,
    height: 40,
    width: 40,
    borderRadius: 10,
    // alignItems:'center',
    // justifyContent:'center'
  },
  viewOfOpacity: {
    opacity: 0.1,
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  iconStyle: {position: 'absolute', alignSelf: 'center', top: 7},
  lableStyle: {bottom: 5, color: '#4A4A4A', fontWeight: 'bold'},
});
