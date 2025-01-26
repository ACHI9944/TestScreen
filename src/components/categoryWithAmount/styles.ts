import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryWithAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

    justifyContent: 'space-between',
  },
  dotWithCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
  },
  categoryText: {
    fontSize: 12,
    color: '#828282',
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
