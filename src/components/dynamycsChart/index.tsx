import React from 'react';
import {View} from 'react-native';
import {styles} from './style';

const DynamicsChart = () => {
  return (
    <View style={styles.dynamicsView}>
      <View style={styles.greenChart1}></View>
      <View style={styles.redChart1}></View>
      <View style={styles.greenChart2}></View>
      <View style={styles.redChart2}></View>
      <View style={styles.greenChart3}></View>
      <View style={styles.redChart3}></View>
      <View style={styles.greenChart4}></View>
      <View style={styles.redChart4}></View>
      <View style={styles.greenChart5}></View>
      <View style={styles.redChart5}></View>
      <View style={styles.greenChart6}></View>
      <View style={styles.redChart6}></View>
    </View>
  );
};

export default DynamicsChart;
