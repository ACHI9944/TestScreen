import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 5,
    alignItems: 'center',
    paddingVertical: 30,
  },
  headers: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  transactionsHeader: {
    fontWeight: 'bold',
  },
  calendarHeader: {
    color: '#6e6e6e',
  },
  incomeAndExpenseView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  incomeView: {
    padding: 20,
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#e6f6eb',
  },
  incomeSum: {
    color: '#29a64e',
    fontWeight: 'bold',
    fontSize: 17,
  },
  expenseView: {
    padding: 20,
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#ffedeb',
  },
  expenseSum: {
    color: '#bc282c',
    fontWeight: 'bold',
    fontSize: 17,
  },
  expensesView: {
    width: '90%',
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'flex-start',
  },
  expensesDataView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    paddingBottom: 12,
  },
  categoryIconView: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ededed',
    padding: 8,
    borderRadius: 50,
  },
  categoryIcon: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  nameText: {
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 12,
  },
  valueText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  dateText: {
    fontSize: 12,
    textAlign: 'right',
    color: '#6e6e6e',
  },
});
