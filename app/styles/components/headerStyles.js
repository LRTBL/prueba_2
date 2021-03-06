import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: Colors.WHITE,
    elevation: 1,
    height: 70,
    zIndex: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: Colors.PRIMARY,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 20,
  },
  body: {marginLeft: 20, marginRight: 15},
  containerLeft: {flex: 0},
  containerRight: {marginRight: 15, flex: 0},
  profileBtn: {marginRight: 15},
  notificationBtn: {paddingLeft: 7, paddingRight: 7},
  badge: {
    width: 30,
    position: 'absolute',
    top: -6,
    right: -15,
  },
});

export default headerStyles;
