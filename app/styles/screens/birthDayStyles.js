import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const birthDayStyles = StyleSheet.create({
  container: {
    height: '100%',
  },
  imageBack: {width: '100%', height: '100%'},
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'AktivGroteskCorp-Bold',
    marginTop: 30,
    color: Colors.WHITE,
  },
  content: {marginLeft: 50, marginRight: 50, height: 'auto', marginBottom: 20},
});

export default birthDayStyles;
