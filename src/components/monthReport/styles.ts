import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  chartWithText: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  imageView: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ededed',
    padding: 8,
    borderRadius: 50,
  },
  image: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 13,
    fontWeight: '100',
    color: 'grey',
  },
  numbersView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  percent: {
    marginLeft: 20,
    backgroundColor: '#edfaed',
    padding: 4,
    borderRadius: 50,
    color: '#37a451',
    fontSize: 12,
  },
});
