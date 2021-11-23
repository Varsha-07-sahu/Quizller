/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyStack from '../navigation';
import { Quiz } from './screens';
import Home from './screens/home';

const App = () => {

  return (
    // <Quiz />
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
};


export default App;
