import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import DynamicsChart from '../dynamycsChart';

const DynamicsAndCalendar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartsView}>
        <View style={styles.dynamicAndCalendarView}>
          <DynamicsChart />
          <Text style={styles.text}>დინამიკა</Text>
        </View>
        <View style={styles.dynamicAndCalendarView}>
          <View style={styles.calendarNumbersView}>
            <View style={styles.calendarNumberGreen}>
              <Text style={styles.numbers}>3</Text>
            </View>
            <View style={styles.calendarNumberGreen}>
              <Text style={styles.numbers}>4</Text>
            </View>
            <View style={styles.calendarNumberRed}>
              <Text style={styles.numbers}>5</Text>
            </View>
            <View style={styles.calendarDots}>
              <Text style={styles.dots}>...</Text>
            </View>
          </View>
          <Text style={styles.text}>კალენდარი</Text>
        </View>
      </View>
    </View>
  );
};

export default DynamicsAndCalendar;
