import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const markItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: 7,
    borderRadius: 8,
  },
  label: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    width: 45,
  },
  labelText: {
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 17,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    alignItems: 'center',
    width: '75%',
  },
  title: {
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  hour: {
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 12,
  },
});

export default markItemStyles;
