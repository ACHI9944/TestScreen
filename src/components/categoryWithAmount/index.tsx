import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {styles} from './styles';
import {CategoryWithAmountProps} from './types';

const CategoryWithAmount = ({
  category,
  amount,
  bgColour,
}: CategoryWithAmountProps) => {
  const {width} = useWindowDimensions();
  const containerWidth = (width * 4) / 7;

  const trauntedCategory =
    category.length > 15 ? `${category.slice(0, 15)}...` : category;
  const trauntedAmount = `${amount} ₾`;
  return (
    <View style={[styles.categoryWithAmount, {width: containerWidth}]}>
      <View style={styles.dotWithCategory}>
        <View style={[styles.colouredDot, {backgroundColor: bgColour}]} />
        <Text style={styles.categoryText}>{trauntedCategory}</Text>
      </View>
      <Text style={styles.amountText}>{trauntedAmount}</Text>
    </View>
  );
};

export default CategoryWithAmount;
