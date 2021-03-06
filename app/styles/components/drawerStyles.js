import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const drawerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 160,
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    backgroundColor: Colors.PRIMARY,
    marginLeft: 35,
  },
  avatarTitle: {
    color: Colors.WHITE,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 25,
  },
  userNameContainer: {
    marginLeft: 20,
    width: '60%',
  },
  userName: {
    color: Colors.PRIMARY,
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 15,
  },

  drawerItem: {
    marginLeft: 40,
  },
  containerButtons: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  logoutButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingLeft: 50,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: Colors.BLACK,
    fontFamily: 'AktivGroteskCorp-Light',
    marginLeft: 30,
  },
  overlayContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 18,
    fontFamily: 'AktivGroteskCorp-Light',
  },
});

export default drawerStyles;
