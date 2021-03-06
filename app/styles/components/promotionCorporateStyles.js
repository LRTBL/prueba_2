import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const promotionCorporateStyles = StyleSheet.create({
  container: {
    borderColor: Colors.YELLOW,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: Colors.YELLOW,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  btnContainer: {
    height: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  bodyContainer: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: Colors.YELLOW,
  },
  lineText: {
    flexDirection: 'row',
    width: '50%',
    marginRight: 25,
  },
  labelText: {
    fontSize: 12,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  text: {
    width: '50%',
    fontSize: 11,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  firstLine: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  secondLine: {
    flexDirection: 'row',
  },
  secondContainer: {flexDirection: 'row', width: '45%'},
  secondText: {
    width: '65%',
    fontSize: 11,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export default promotionCorporateStyles;
