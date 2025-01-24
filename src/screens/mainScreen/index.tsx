import {Text} from '@react-navigation/elements';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import {Props} from './types';

const MainScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('MyFinances')}>
        <Text style={styles.text}>Click To View Finances</Text>
      </Pressable>
    </View>
  );
};
export default MainScreen;
