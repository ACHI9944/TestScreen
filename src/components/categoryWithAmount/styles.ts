import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryWithAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dotWithCategory: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    color: '#828282',
    marginRight: 38,
  },
  amountText: {
    fontWeight: 'bold',
  },
  colouredDot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    marginRight: 4,
  },
});
