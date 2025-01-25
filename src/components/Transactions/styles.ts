import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 5,
    alignItems: 'center',
    paddingVertical: 30,
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
  header: {
    width: '90%',
    fontWeight: 'bold',
    fontSize: 20,
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
});
