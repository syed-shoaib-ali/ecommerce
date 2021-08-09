import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const RootStack = createStackNavigator();
// Navigator Screens
import Navigation from './Src/Navigation/Stack.js';
const App=()=> {
  return (
    <>
      <SafeAreaProvider>
          <NavigationContainer>
              <RootStack.Navigator headerMode="none">
                <RootStack.Screen name="Navigation" component={Navigation} />
              </RootStack.Navigator>
          </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default App;
