import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const itemEstablishmentStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  contentContainer: {flexDirection: 'row'},
  textContainer: {marginLeft: 15, marginRight: 15, width: '80%'},
  local: {
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 15,
    width: 200,
  },
  direction: {
    marginTop: 2,
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 13,
  },
  hourContainer: {marginTop: 15, marginLeft: 5},
  hour: {
    fontSize: 13,
    color: Colors.DARK_GREY,
    fontFamily: 'AktivGroteskCorp-Light',
  },
});

export default itemEstablishmentStyles;
