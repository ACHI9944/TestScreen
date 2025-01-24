import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreenHeader from '../components/MainScreenHeader';
import MainScreen from '../screens/mainScreen';
import MyFinances from '../screens/myFinances';
import {RootStackParamList} from './types';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          header: () => {
            return <MainScreenHeader />;
          },
        }}
      />
      <Stack.Screen name="MyFinances" component={MyFinances} />
    </Stack.Navigator>
  );
};
export default Router;
