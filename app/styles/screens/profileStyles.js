import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const profileStyles = StyleSheet.create({
  containerAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#F2F2F2',
  },
  avatar: {
    backgroundColor: Colors.PRIMARY,
    marginBottom: 20,
  },
  avatarTitle: {
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 40,
  },
  userName: {
    fontFamily: 'AktivGroteskCorp-Light',
    color: Colors.BLACK,
    fontSize: 18,
  },
  containerPersonal: {
    paddingLeft: 50,
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
  },
  dataContainer: {
    width: 300,
    flexDirection: 'row',
    marginBottom: 8,
  },
  profileContainer: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  profileName: {
    fontSize: 15,
    width: 70,
    color: Colors.BLACK,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  profileLabel: {fontSize: 15, fontFamily: 'AktivGroteskCorp-Light'},
  descriptionTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'AktivGroteskCorp-Light',
  },
  descriptionContainer: {
    marginLeft: 50,
    marginTop: 20,
  },
  containerBtns: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
  },
  containerBtn: {
    marginBottom: 10,
  },
  btn: {
    borderRadius: 25,
    backgroundColor: Colors.PRIMARY,
    height: 45,
    width: 250,
  },
  btnText: {
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export default profileStyles;
