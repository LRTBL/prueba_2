import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const pdfViewStyles = StyleSheet.create({
  container: {flex: 1},
  pdfView: {
    flex: 1,
    backgroundColor: Colors.DARK_GREY,
    paddingRight: 50,
    zIndex: 100,
  },
  validationContainer: {
    position: 'absolute',
    zIndex: 100,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  validationError: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
  containerButtons: {flexDirection: 'row', height: 60},
  downloadButton: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  downloadText: {
    fontSize: 17,
    fontFamily: 'AktivGroteskCorp-Medium',
    marginLeft: 10,
    color: Colors.WHITE,
  },
  participateButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  participateText: {
    fontWeight: '800',
    fontSize: 17,
    marginLeft: 15,
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Medium',
  },
  shareButton: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
  },
  shareText: {
    fontFamily: 'AktivGroteskCorp-Medium',
    fontSize: 17,
    color: Colors.WHITE,
    marginLeft: 10,
  },
});

export default pdfViewStyles;
