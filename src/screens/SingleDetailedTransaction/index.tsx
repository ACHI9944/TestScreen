import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {props} from './types';
import {styles} from './styles';
import {DummyExpensesList, DummyIncomeList} from '../../assets/dummy';
import ImageIconComponent from '../../components/imageIconComponent';
import {getCategoryImage, getTypeImage} from '../../util/ImagePicker';

const SingleDetailedTransaction = () => {
  const {params} = useRoute<props>();
  const {id} = params;
  const mergedTransactions = [...DummyIncomeList, ...DummyExpensesList];
  const transaction = mergedTransactions.find(t => t.id === id);
  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text>Transaction not found</Text>
      </View>
    );
  }
  console.log(transaction);
  const typeImage = getTypeImage(transaction.type);
  const categoryImage = getCategoryImage(transaction.category);
  return (
    <View style={styles.container}>
      <View style={styles.amountAndIconView}>
        <ImageIconComponent imageuri={categoryImage} />
        <View style={styles.amountView}>
          <Text style={styles.name}>{transaction.senderName}</Text>
          <Text style={styles.amount}>{transaction.value}</Text>
          <Text style={styles.date}>{transaction.date}</Text>
        </View>
      </View>
      <View style={styles.typesAndIconView}>
        <ImageIconComponent imageuri={typeImage} />
        <View style={styles.typesView}>
          <Text style={styles.type}>{transaction.type}</Text>
          <Text style={styles.payType}>{transaction.payType}</Text>
        </View>
      </View>
    </View>
  );
};

export default SingleDetailedTransaction;
