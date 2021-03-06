import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const promotionCorporateStyles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  title: {
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontSize: 15,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  modalContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 13,
    marginBottom: 10,
  },
  modalSubtitle: {
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Bold',
    textTransform: 'uppercase',
    fontSize: 18,
    marginBottom: 25,
  },
  modalLegal: {
    textAlign: 'center',
    color: Colors.DARK_GREY,
    fontFamily: 'AktivGroteskCorp-Light',
  },
});

export default promotionCorporateStyles;
