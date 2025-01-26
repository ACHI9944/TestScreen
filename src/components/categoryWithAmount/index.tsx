import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {CategoryWithAmountProps} from './types';

const CategoryWithAmount = ({
  category,
  amount,
  bgColour,
}: CategoryWithAmountProps) => {
  return (
    <View style={styles.categoryWithAmount}>
      <View style={styles.dotWithCategory}>
        <View style={[styles.colouredDot, {backgroundColor: bgColour}]} />
        <Text style={styles.categoryText} numberOfLines={1}>
          {category}
        </Text>
      </View>
      <Text style={styles.amountText}>{`${amount} ₾`}</Text>
    </View>
  );
};

export default CategoryWithAmount;
