import React, {useCallback} from 'react';
import {SectionList, Text, View} from 'react-native';
import {styles} from './styles';
import {
  DummyExpensesList,
  DummyIncomeList,
  getCategoryImage,
} from '../../assets/dummy';
import HeaderWithCalendar from '../headerWithCalendar';
import {TransactionItem} from './types';
import SingleExpense from '../singleExpense';
import {formatedNumber} from '../../util/formatedNumber';

const Transactions = () => {
  const totalIncome = DummyIncomeList.reduce(
    (sum, item) => sum + item.value,
    0,
  );
  const totalExpenses = DummyExpensesList.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  const mergedTransactionsList = [...DummyIncomeList, ...DummyExpensesList];

  const sections = [
    {
      title: 'დღეს',
      data: mergedTransactionsList,
    },
  ];

  const renderItem = useCallback(({item}: {item: TransactionItem}) => {
    const categoryImage = getCategoryImage(item.category);
    return <SingleExpense categoryImage={categoryImage} item={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithCalendar header={'ტრანზაქციები'} />
      <View style={styles.incomeAndExpenseView}>
        <View style={styles.incomeView}>
          <Text>შემოსავალი</Text>
          <Text style={styles.incomeSum}>{formatedNumber(totalIncome)}</Text>
        </View>
        <View style={styles.expenseView}>
          <Text>ხარჯი</Text>
          <Text style={styles.expenseSum}>{formatedNumber(totalExpenses)}</Text>
        </View>
      </View>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        renderSectionHeader={({section}) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default Transactions;
