import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const tabNavigationStyles = StyleSheet.create({
  tabContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 0,
    height: 40,
  },
  tabBarUnderline: {
    backgroundColor: Colors.SECONDARY,
  },
  tab: {
    backgroundColor: '#fff',
  },
  textTab: {
    color: Colors.PRIMARY,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 10,
  },
  textTabRRHH: {
    color: Colors.PRIMARY,
    fontSize: 10,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  textTabActiveNews: {
    color: Colors.SECONDARY,
    fontSize: 10,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  textTabActiveCommercial: {
    color: Colors.YELLOW,
    fontSize: 10,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  textTabActiveRRHH: {
    color: Colors.PRIMARY,
    width: '100%',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  textTabActiveImprovement: {
    color: Colors.GREEN,
    fontSize: 10,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export default tabNavigationStyles;
