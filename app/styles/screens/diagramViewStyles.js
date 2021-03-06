import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const diagramViewStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  image: {
    resizeMode: 'contain',
    height: 450,
    width: 'auto',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Light',
  },
  containerAlert: {
    backgroundColor: Colors.GREEN_LIGHT,
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    borderRadius: 10,
  },
  textAlert: {
    color: Colors.GREEN,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default diagramViewStyles;
