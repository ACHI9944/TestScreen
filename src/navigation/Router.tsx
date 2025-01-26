import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/mainScreen';
import MyFinances from '../screens/myFinances';
import {RootStackParamList} from './types';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="MyFinances" component={MyFinances} />
    </Stack.Navigator>
  );
};
export default Router;
