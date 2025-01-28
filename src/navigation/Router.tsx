import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabMainScreen from './TabMainscreen';
import TabMyFinances from './TabMyFinances';
import {RootTabParamList} from './types';
import {Image} from 'react-native';
const homeUri =
  'https://img.icons8.com/?size=100&id=73&format=png&color=000000';
const financesUri =
  'https://img.icons8.com/?size=100&id=484&format=png&color=000000';

const Router = () => {
  const {Navigator, Screen} = createBottomTabNavigator<RootTabParamList>();
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={{
                width: size,
                height: size,
                tintColor: focused ? '#c374a4' : 'black',
              }}
              source={{uri: homeUri}}
            />
          ),
          tabBarActiveTintColor: '#c374a4',
        }}
        name="Main"
        component={TabMainScreen}
      />
      <Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={{
                width: size,
                height: size,
                tintColor: focused ? '#c374a4' : 'black',
              }}
              source={{uri: financesUri}}
            />
          ),
          tabBarActiveTintColor: '#c374a4',
        }}
        name="Finances"
        component={TabMyFinances}
      />
    </Navigator>
  );
};
export default Router;
