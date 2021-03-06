import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const birthDayItemStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: Colors.SECONDARY,
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 15,
    borderRadius: 10,
  },
  image: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 20,
    width: '50%',
    justifyContent: 'center',
  },
  name: {
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  employment: {
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 13,
    marginTop: 3,
  },
  separator: {
    borderTopWidth: 0.5,
    borderTopColor: '#fff',
    marginTop: 10,
    paddingTop: 5,
  },
  workplace: {color: Colors.WHITE, fontFamily: 'AktivGroteskCorp-Bold'},
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  details: {
    marginLeft: 15,
    color: '#fff',
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 13,
  },
});

export default birthDayItemStyles;
