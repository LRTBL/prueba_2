import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const markStyles = StyleSheet.create({
  containerContent: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  topTitle: {
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Light',
  },
  containerDate: {
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 30,
    marginBottom: 10,
  },
  textDate: {
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  containerMessage: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 13,
    borderRadius: 3,
    marginTop: 40,
  },
  textMessage: {
    color: Colors.PRIMARY,
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 13,
  },
  containerBottom: {
    backgroundColor: Colors.GREY,
    paddingTop: 25,
    paddingLeft: 50,
    paddingRight: 80,
    paddingBottom: 35,
  },
  status: {
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 13,
    marginBottom: 10,
  },
  lineStatus: {
    flexDirection: 'row',
    marginTop: 10,
  },
  colorStatus: {
    marginRight: 20,
    width: 20,
    height: 20,

    backgroundColor: Colors.GREEN,
    borderRadius: 5,
  },
  textStatus: {
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 12,
    marginTop: 2,
  },
});

export default markStyles;
