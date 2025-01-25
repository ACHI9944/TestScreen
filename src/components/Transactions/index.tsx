import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {
  DummyExpensesList,
  DummyIncomeList,
  getCategoryImage,
} from '../../assets/dummy';
import HeaderWithCalendar from '../headerWithCalendar';
import {TransactionItem} from './types';
import SingleExpense from '../singleExpense';

const Transactions = () => {
  const totalIncome = DummyIncomeList.reduce(
    (sum, item) => sum + item.value,
    0,
  );
  const totalExpenses = DummyExpensesList.reduce(
    (sum, item) => sum + item.value,
    0,
  );
  const MergedTransactionsList = [...DummyIncomeList, ...DummyExpensesList];

  const renderItem = ({item}: {item: TransactionItem}) => {
    const categoryImage = getCategoryImage(item.category);
    return <SingleExpense categoryImage={categoryImage} item={item} />;
  };

  return (
    <View style={styles.container}>
      <HeaderWithCalendar header={'ტრანზაქციები'} />
      <View style={styles.incomeAndExpenseView}>
        <View style={styles.incomeView}>
          <Text>შემოსავალი</Text>
          <Text style={styles.incomeSum}>{`+${totalIncome}.00`}</Text>
        </View>
        <View style={styles.expenseView}>
          <Text>ხარჯი</Text>
          <Text style={styles.expenseSum}>{`${totalExpenses}.00`}</Text>
        </View>
      </View>

      <Text style={styles.header}>დღეს</Text>
      <FlatList
        data={MergedTransactionsList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Transactions;
