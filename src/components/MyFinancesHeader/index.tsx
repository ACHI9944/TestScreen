import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
const src = 'https://img.icons8.com/?size=100&id=40217&format=png&color=000000';
const src2 =
  'https://img.icons8.com/?size=100&id=Su0viqkUpIfe&format=png&color=000000';

const MyFinancesHeader = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Image source={{uri: src}} style={styles.image} />
      </Pressable>
      <Text style={styles.header}>ჩემი ფინანსები</Text>
      <View style={styles.imageView}>
        <Image source={{uri: src2}} style={styles.image} />
      </View>
    </View>
  );
};

export default MyFinancesHeader;
