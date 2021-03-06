import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },
  containerImageShop: {
    alignItems: 'center',
    paddingTop: 90,
  },
  containerImageLogo: {
    alignItems: 'center',
    paddingTop: 50,
  },
  imageShop: {
    height: 150,
    width: 160,
  },
  imageLogo: {
    height: 78,
    width: '75%',
  },
  formContainer: {
    marginTop: 60,
    marginRight: 20,
    marginLeft: 20,
  },
  formSecondContainer: {
    marginTop: 40,
    marginRight: 20,
    marginLeft: 20,
  },
  inputContainer: {
    height: 48,
    borderColor: Colors.PRIMARY_DARK,
    borderBottomWidth: 2,
    borderWidth: 1,
    backgroundColor: Colors.PRIMARY,
    shadowColor: Colors.BLACK,
    borderRadius: 50,
    paddingLeft: 25,
    paddingRight: 20,
    elevation: 2,
  },
  inputText: {fontSize: 15, fontFamily: 'AktivGroteskCorp-Light'},
  btnContainerLogin: {
    marginRight: 10,
  },
  containerBtn: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  btnStyle: {
    borderRadius: 20,
    backgroundColor: Colors.WHITE,
    height: 45,
    width: 240,
  },
  textBtnLogin: {
    color: Colors.SECONDARY,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 16,
  },
  containerForgotBtn: {
    marginTop: 20,
  },
  textFirst: {
    fontFamily: 'AktivGroteskCorp-Light',
    color: Colors.WHITE,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
  },
  forgotPassText: {
    fontFamily: 'AktivGroteskCorp-Light',
    color: Colors.WHITE,
    fontSize: 15,
  },
});

export default loginStyles;
