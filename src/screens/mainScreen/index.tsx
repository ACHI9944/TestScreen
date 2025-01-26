import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {props} from './types';

const MainScreen = () => {
  const {navigate} = useNavigation<props>();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>მთავარი გვერდი</Text>
      </View>

      <Pressable style={styles.button} onPress={() => navigate('MyFinances')}>
        <Text style={styles.text}>Click To View Finances</Text>
      </Pressable>
    </View>
  );
};
export default MainScreen;
