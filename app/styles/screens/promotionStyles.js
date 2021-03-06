import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const promotionStyles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
  textSelectedSwitchSelector: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textSwitchSelector: {
    fontFamily: 'AktivGroteskCorp-Bold',
    textTransform: 'uppercase',
    color: Colors.YELLOW,
  },
  contentContainer: {
    height: '100%',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 120,
  },
  contentMargin: {
    marginBottom: 30,
  },
  title: {
    color: Colors.PRIMARY,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 20,
  },
  flatList: {
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
  },
  activity: {
    height: '80%',
    justifyContent: 'center',
  },
});

export default promotionStyles;
