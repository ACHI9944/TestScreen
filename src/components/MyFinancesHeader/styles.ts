import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageView: {
    borderWidth: 0.1,
    padding: 8,
    borderRadius: 50,
  },
  image: {
    width: 18,
    height: 18,
  },
});
