import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const numberDimensions = (screenWidth * 43.2) / 100 / 5;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  chartsView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dynamicAndCalendarView: {
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 15,
    width: '48%',
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
  },

  calendarNumbersView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarNumberGreen: {
    width: numberDimensions,
    height: numberDimensions,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    backgroundColor: '#01b73b',
  },
  calendarNumberRed: {
    width: numberDimensions,
    height: numberDimensions,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    backgroundColor: '#fc4845',
  },
  calendarDots: {
    width: numberDimensions,
    height: numberDimensions,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    backgroundColor: '#f4f4f4',

    fontWeight: 'bold',
  },
  numbers: {
    color: 'white',
  },
  dots: {
    color: '#959595',
  },
});
