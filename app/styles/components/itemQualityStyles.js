import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const itemQualityStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN_LIGHT,
    marginTop: 15,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    flexDirection: 'row',
  },
  titleText: {
    color: Colors.GREEN,
    textTransform: 'uppercase',
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 17,
    marginLeft: 10,
  },
  descriptionText: {
    marginTop: 5,
    fontSize: 13,
    color: Colors.GREEN,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  presentationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  presentationText: {
    color: Colors.GREEN,
    fontFamily: 'AktivGroteskCorp-Light',
    marginRight: 10,
  },
});

export default itemQualityStyles;
