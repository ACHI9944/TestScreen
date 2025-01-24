import {Image, Text, View} from 'react-native';
import {styles} from './styles';
const reportUri =
  'https://img.icons8.com/?size=100&id=NVXLSE3DVpdt&format=png&color=000000';
const arrowUri =
  'https://img.icons8.com/?size=100&id=7849&format=png&color=000000';

const PlanMonthBudget = () => {
  return (
    <View style={styles.monthBudgetContainer}>
      <View style={styles.allComponents}>
        <View style={styles.chartAndText}>
          <View style={styles.reportView}>
            <Image source={{uri: reportUri}} style={styles.reportIcon} />
          </View>
          <Text style={styles.text}>დაგეგმე თვიური ბიუჯეტი</Text>
        </View>
        <Image source={{uri: arrowUri}} style={styles.arrowIcon} />
      </View>
    </View>
  );
};
export default PlanMonthBudget;
