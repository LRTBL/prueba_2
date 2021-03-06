import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../Colors';

const promotionViewStyles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 40,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'AktivGroteskCorp-Light',
    textAlign: 'center',
    marginTop: 15,
  },
  itemContainer: {
    marginRight: 25,
    marginLeft: 25,
    marginTop: 40,
    marginBottom: 20,
  },
  ecommerceLegal: {marginTop: 40, marginRight: 40, marginLeft: 40},
  ecommerceTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  ecommerceText: {
    textAlign: 'center',
    marginTop: 20,
    color: Colors.DARK_GREY,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  containerValidate: {
    height: Dimensions.get('screen').height / 2,
    justifyContent: 'center',
  },
  modalContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  modalText: {
    textAlign: 'center',
    color: Colors.DARK_GREY,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  btnLegal: {
    height: 60,
    backgroundColor: Colors.YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTextLegal: {
    fontWeight: '800',
    fontSize: 17,
    color: Colors.WHITE,
    marginLeft: 25,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export default promotionViewStyles;
