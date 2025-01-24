import {Image, Text, View} from 'react-native';
import {styles} from './styles';
const reportUri =
  'https://img.icons8.com/?size=100&id=NVXLSE3DVpdt&format=png&color=000000';
const exitUri =
  'https://img.icons8.com/?size=100&id=95834&format=png&color=000000';
const MonthReport = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartWithText}>
        <View style={styles.imageView}>
          <Image source={{uri: reportUri}} style={styles.image} />
        </View>
        <View>
          <Text style={styles.text}>წინა თვის რეპორტი</Text>
          <View style={styles.numbersView}>
            <Text style={styles.numbers}>215.00 ₾</Text>
            <Text style={styles.percent}>+ 5%</Text>
          </View>
        </View>
      </View>
      <Image source={{uri: exitUri}} style={styles.image} />
    </View>
  );
};

export default MonthReport;
