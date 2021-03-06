import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const newStyles = StyleSheet.create({
  container: {
    height: '100%',
    marginLeft: 20,
    marginRight: 20,
  },
  swiperContainer: {
    height: 260,
    marginTop: 30,
  },
  swiperActiveDot: {
    backgroundColor: Colors.WHITE,
    width: 38,
    height: 4,
  },
  swiperInactiveDot: {
    backgroundColor: '#ee858c',
    width: 38,
    height: 4,
  },
  swiperPagination: {
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginBottom: 3,
  },
  containerItems: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default newStyles;
