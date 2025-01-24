import {Text, View} from 'react-native';
import {styles} from './styles';
import PieChart from 'react-native-pie-chart';
import CategoryWithAmount from '../categoryWithAmount';
import {DummyExpenses} from '../../assets/dummy';
import {lastMonthDate, todayDate} from '../../util/DateCalculator';

const TopCategories = () => {
  const widthAndHeight = 145;

  const sumOfExpenses =
    DummyExpenses[0].value +
    DummyExpenses[1].value +
    DummyExpenses[2].value +
    DummyExpenses[3].value;
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.categoriesHeader}>ტოპ კატეგორიები</Text>
        <Text
          style={styles.calendarHeader}>{`${lastMonthDate}-${todayDate}`}</Text>
      </View>
      <View style={styles.chartAndNumbers}>
        <View style={styles.chartContainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={DummyExpenses}
            cover={{radius: 0.9}}
            padAngle={0.05}
          />
          <View style={styles.centeredTextContainer}>
            <Text style={styles.centeredText}>ხარჯი</Text>
            <Text style={styles.centeredNumber}>{sumOfExpenses} ₾</Text>
          </View>
        </View>
        <View style={styles.categoryAndAmounts}>
          <CategoryWithAmount
            amount={DummyExpenses[0].value}
            category={'საბანკო ოპერაციები'}
            bgColour={DummyExpenses[0].color}
          />
          <CategoryWithAmount
            amount={DummyExpenses[1].value}
            category={'გადასახადები და კომუნალურები'}
            bgColour={DummyExpenses[1].color}
          />
          <CategoryWithAmount
            amount={DummyExpenses[2].value}
            category={'კვება'}
            bgColour={DummyExpenses[2].color}
          />
          <CategoryWithAmount
            amount={DummyExpenses[3].value}
            category={'საყიდლები'}
            bgColour={DummyExpenses[3].color}
          />
        </View>
      </View>
    </View>
  );
};

export default TopCategories;
