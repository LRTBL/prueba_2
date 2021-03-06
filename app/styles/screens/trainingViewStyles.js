import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const trainingViewStyles = StyleSheet.create({
  container: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
  },
  title: {
    color: Colors.PRIMARY,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 18,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  containerBody: {
    marginTop: 20,
    flexDirection: 'row',
  },
  key: {
    fontSize: 17,
    fontFamily: 'AktivGroteskCorp-Bold',
    width: '35%',
  },
  value: {
    fontSize: 17,
    width: '70%',
    fontFamily: 'AktivGroteskCorp-Light',
  },
  comentary: {
    marginTop: 40,
    fontSize: 13,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  btnContainer: {
    marginTop: 50,
  },
  btn: {
    // margin: 50,
    borderRadius: 50,
    height: 45,
    backgroundColor: Colors.PRIMARY,
  },
  titleBtn: {
    textTransform: 'uppercase',
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export default trainingViewStyles;
