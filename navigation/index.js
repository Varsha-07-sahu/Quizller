import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Quiz } from '../app/screens';
import Home from '../app/screens/home';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
    );
}

export default MyStack;