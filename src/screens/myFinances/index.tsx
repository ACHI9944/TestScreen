import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import MyFinancesHeader from '../../components/MyFinancesHeader';
import MonthReport from '../../components/monthReport';
import DynamicsAndCalendar from '../../components/dynamicsAndCalendar';
import TopCategories from '../../components/topCategories';
import PlanMonthBudget from '../../components/PlanMonthBudget';
import Transactions from '../../components/Transactions';
import {styles} from './styles';

const MyFinances = () => {
  const data = [''];
  const renderItem = useCallback(() => {
    return (
      <View style={styles.container}>
        <MyFinancesHeader />
        <MonthReport />
        <DynamicsAndCalendar />
        <TopCategories />
        <PlanMonthBudget />
        <Transactions />
      </View>
    );
  }, []);
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};
export default MyFinances;
