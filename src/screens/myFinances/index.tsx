import React from 'react';
import {useLayoutEffect} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import MyFinancesHeader from '../../components/MyFinancesHeader';
import {Props} from './types';
import MonthReport from '../../components/monthReport';
import DynamicsAndCalendar from '../../components/dynamicsAndCalendar';
import TopCategories from '../../components/topCategories';
import PlanMonthBudget from '../../components/PlanMonthBudget';
import Transactions from '../../components/Transactions';

const MyFinances: React.FC<Props> = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return <MyFinancesHeader />;
      },
    });
  }, [navigation]);
  const data = [
    <MonthReport />,
    <DynamicsAndCalendar />,
    <TopCategories />,
    <PlanMonthBudget />,
    <Transactions />,
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()} // Use index as a key
      renderItem={({item}) => <View>{item}</View>} // Render each item as a View
    />
  );
};
export default MyFinances;
