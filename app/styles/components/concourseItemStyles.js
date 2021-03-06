import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const concouseItemStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {width: '100%', height: 225, borderRadius: 10},
  terminateContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 15,
  },
  icon: {
    marginTop: 3,
  },
  terminateText: {
    marginLeft: 10,
  },
  terminateTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  terminateSubTitle: {
    color: '#fff',
    fontFamily: 'AktivGroteskCorp-Light',
    marginTop: 5,
  },
});

export default concouseItemStyles;
