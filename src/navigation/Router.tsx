import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/mainScreen';
import MyFinances from '../screens/myFinances';
import {RootStackParamList} from './types';
import ImageIconComponent from '../components/imageIconComponent';
import SingleDetailedTransaction from '../screens/SingleDetailedTransaction';
const src =
  'https://img.icons8.com/?size=100&id=Su0viqkUpIfe&format=png&color=000000';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: 'minimal',
        headerTitleStyle: {fontSize: 15, fontWeight: 'bold'},
        headerStyle: {backgroundColor: '#f6f6f6'},
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{headerTitle: 'მთავარი გვერდი'}}
      />
      <Stack.Screen
        name="MyFinances"
        component={MyFinances}
        options={{
          headerTitle: 'ჩემი ფინანსები',
          headerRight: () => <ImageIconComponent imageuri={src} />,
        }}
      />
      <Stack.Screen
        name="SingleDetailedTransaction"
        component={SingleDetailedTransaction}
        options={{headerTitle: 'ტრანზაქციის დეტალები'}}
      />
    </Stack.Navigator>
  );
};
export default Router;
