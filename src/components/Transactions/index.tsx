import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {lastMonthDate, todayDate} from '../../util/DateCalculator';
import {
  DummyExpensesList,
  DummyIncomeList,
  getCategoryImage,
} from '../../assets/dummy';

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

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.transactionsHeader}>ტრანზაქციები</Text>
        <Text
          style={styles.calendarHeader}>{`${lastMonthDate}-${todayDate}`}</Text>
      </View>
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

      <Text style={{width: '90%', fontWeight: 'bold', fontSize: 20}}>დღეს</Text>
      {MergedTransactionsList.map(item => {
        const categoryImage = getCategoryImage(item.category);
        return (
          <View key={item.id} style={styles.expensesView}>
            <View style={styles.categoryIconView}>
              <Image
                source={{uri: categoryImage}}
                style={styles.categoryIcon}
              />
            </View>
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
                  {`${item.value}$`}
                </Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Transactions;
