import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {ImageIcon} from './types';

const ImageIconComponent = ({imageuri}: ImageIcon) => {
  return (
    <View style={styles.imageView}>
      <Image source={{uri: imageuri}} style={styles.image} />
    </View>
  );
};

export default ImageIconComponent;
