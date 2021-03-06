import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const adviceItemStyles = StyleSheet.create({
  container: {
    marginBottom: 30,
    height: 250,
    backgroundColor: Colors.GREY,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    width: '100%',
  },
  textSubContainer: {width: '92%'},
  title: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: 'AktivGroteskCorp-Bold',
    textTransform: 'uppercase',
  },
  text: {
    marginTop: 5,
    color: Colors.WHITE,
    fontSize: 15,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  icon: {width: '10%', alignItems: 'center', marginLeft: 5},
});

export default adviceItemStyles;
