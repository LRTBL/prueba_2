import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../Colors';

const imageViewStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 60,
  },
  title: {
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 22,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  contentText: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  image: {height: 345, width: '100%', marginTop: 40},
  shareButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  textShareButton: {
    fontSize: 17,
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Medium',
    marginLeft: 20,
  },
  fileContainer: {
    backgroundColor: '#ebe7ed',
    flexDirection: 'row',
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 50,
    width: 'auto',
    borderRadius: 12,
  },
  fileText: {
    color: Colors.PRIMARY,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 17,
    textTransform: 'uppercase',
    marginLeft: 10,
  },
  footerImage: {
    width: Dimensions.get('window').width,
    marginBottom: 50,
  },
  footerText: {
    textAlign: 'center',
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export default imageViewStyles;
