import {useLayoutEffect} from 'react';
import {ScrollView, View} from 'react-native';
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
  return (
    <ScrollView>
      <MonthReport />
      <DynamicsAndCalendar />
      <TopCategories />
      <PlanMonthBudget />
      <Transactions />
    </ScrollView>
  );
};
export default MyFinances;
