import React from 'react';
import {Text, View} from 'react-native';
import ImageIconComponent from '../imageIconComponent';
import {styles} from './styles';
import {SingleExpenseProps} from './types';
import {formatTransactions} from '../../util/formatedNumber';
import {CurrencyEnum} from '../../constants/CurrencyEnum';

const SingleExpense = ({item, categoryImage}: SingleExpenseProps) => {
  return (
    <View key={item.id} style={styles.expensesView}>
      <ImageIconComponent imageuri={categoryImage} />
      <View style={styles.expensesDataView}>
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <View>
          <Text
            style={[
              styles.valueText,
              item.value > 0 ? {color: '#3d965b'} : null,
            ]}>
            {formatTransactions(item.value, CurrencyEnum.USD)}
          </Text>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleExpense;
