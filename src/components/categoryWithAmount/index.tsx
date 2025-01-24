import {Text, View} from 'react-native';
import {styles} from './styles';
import {CategoryWithAmountProps} from './types';

const CategoryWithAmount = ({
  category,
  amount,
  bgColour,
}: CategoryWithAmountProps) => {
  const trauntedCategory =
    category.length > 14 ? `${category.slice(0, 15)}...` : category;
  const trauntedAmount = `${amount} ₾`;
  return (
    <View style={styles.categoryWithAmount}>
      <View style={styles.dotWithCategory}>
        <View style={[styles.colouredDot, {backgroundColor: bgColour}]} />
        <Text style={styles.categoryText}>{trauntedCategory}</Text>
      </View>
      <Text style={styles.amountText}>{trauntedAmount}</Text>
    </View>
  );
};

export default CategoryWithAmount;
