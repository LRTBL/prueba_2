import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const profileEditStyles = StyleSheet.create({
  container: {marginRight: 20, marginLeft: 20},
  containerBtn: {height: 40, marginBottom: 15},
  title: {
    fontFamily: 'AktivGroteskCorp-Bold',
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontSize: 30,
    marginBottom: 30,
    marginTop: 30,
  },
  iconLeftBtn: {marginRight: 20},
  fontBtn: {
    fontFamily: 'AktivGroteskCorp-Light',
  },
  inputBtn: {
    fontFamily: 'AktivGroteskCorp-Light',
    marginTop: 2,
    fontSize: 15,
  },
  inputContainer: {
    height: 40,
    borderColor: Colors.PRIMARY,
    borderBottomWidth: 1,
    borderWidth: 1,
    shadowColor: Colors.BLACK,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainerDisabled: {
    height: 40,
    borderColor: '#dcdcdc',
    borderBottomWidth: 2,
    borderWidth: 1,
    shadowColor: Colors.BLACK,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textQuestion: {
    marginLeft: 30,
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 14,
    color: Colors.DARK_GREY,
    marginBottom: 10,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60,
  },
  btnText: {
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export default profileEditStyles;
