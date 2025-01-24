import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const DynamicsAndCalendar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartsView}>
        <View style={styles.dynamicAndCalendarView}>
          <Image
            source={require('../../assets/Capture.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>დინამიკა</Text>
        </View>
        <View style={styles.dynamicAndCalendarView}>
          <View style={styles.calendarNumbersView}>
            <Text style={styles.calendarNumberGreen}>3</Text>
            <Text style={styles.calendarNumberGreen}>4</Text>
            <Text style={styles.calendarNumberRed}>5</Text>
            <Text style={styles.calendarDots}>...</Text>
          </View>
          <Text style={styles.text}>კალენდარი</Text>
        </View>
      </View>
    </View>
  );
};

export default DynamicsAndCalendar;
