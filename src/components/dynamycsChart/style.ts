import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const dynamicsWidth = (((screenWidth * 43.2) / 100) * 3.5) / 5;
const dynamicsHeight = (((screenWidth * 43.2) / 100) * 3.5) / 5 / 3;

export const styles = StyleSheet.create({
  dynamicsView: {
    width: dynamicsWidth,
    height: dynamicsHeight,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  greenChart1: {
    backgroundColor: '#1fa64a',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: 4,
    height: dynamicsHeight * 0.7,
    marginRight: 2,
  },
  redChart1: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#e44848',
    width: 4,
    height: dynamicsHeight * 0.55,
    marginRight: 7,
  },
  greenChart2: {
    backgroundColor: '#1fa64a',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: 4,
    height: dynamicsHeight * 0.3,
    marginRight: 2,
  },
  redChart2: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#e44848',
    width: 4,
    height: dynamicsHeight * 0.9,
    marginRight: 7,
  },
  greenChart3: {
    backgroundColor: '#1fa64a',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: 4,
    height: dynamicsHeight * 0.8,
    marginRight: 2,
  },
  redChart3: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#e44848',
    width: 4,
    height: dynamicsHeight * 0.6,
    marginRight: 7,
  },
  greenChart4: {
    backgroundColor: '#1fa64a',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: 4,
    height: dynamicsHeight * 0.8,
    marginRight: 2,
  },
  redChart4: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#e44848',
    width: 4,
    height: dynamicsHeight * 0.55,
    marginRight: 7,
  },
  greenChart5: {
    backgroundColor: '#1fa64a',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: 4,
    height: dynamicsHeight * 0.3,
    marginRight: 2,
  },
  redChart5: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#e44848',
    width: 4,
    height: dynamicsHeight * 0.9,
    marginRight: 7,
  },
  greenChart6: {
    backgroundColor: '#1fa64a',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: 4,
    height: dynamicsHeight * 0.8,
    marginRight: 2,
  },
  redChart6: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#e44848',
    width: 4,
    height: dynamicsHeight * 0.6,
    marginRight: 7,
  },
});
