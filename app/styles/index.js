import {StyleSheet, StatusBar, Platform} from 'react-native';
import Colors from './Colors';

import {drawerStyles, tabNavigationStyles, headerStyles} from './components';
import {loginStyles, newStyles} from './screens';

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  logo: {
    width: 200,
    height: 50,
    margin: 100,
  },
});

const containerGeneral = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  margin: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  litleMargin: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFound: {
    marginTop: 20,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  containerTotal: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  viewedContainer: {
    marginBottom: 20,
    marginRight: 10,
  },
  viewed: {
    textAlign: 'right',
    fontFamily: 'AktivGroteskCorp-Bold',
    color: Colors.PRIMARY,
  },
});

const switcherStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swContainer: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  selectedSwRhh: {
    textTransform: 'uppercase',
    fontFamily: 'AktivGroteskCorp-Bold',
    color: Colors.WHITE,
  },
  unselectedSwRhh: {
    textTransform: 'uppercase',
    fontFamily: 'AktivGroteskCorp-Bold',
    color: Colors.PRIMARY,
  },
  subContainer: {
    flex: 1,
  },
});

const modalStepper = StyleSheet.create({
  container: {
    width: '85%',
    height: 'auto',
    padding: 0,
    borderRadius: 10,
  },
  containerButtons: {
    flexDirection: 'row',
  },
  backColor: {
    backgroundColor: '#2b2a2ab8',
  },
  containerButtonLeft: {
    width: '50%',
    backgroundColor: Colors.SECONDARY,
    height: 40,
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
  },
  containerButtonRight: {
    width: '50%',
    backgroundColor: Colors.PRIMARY,
    height: 40,
    justifyContent: 'center',
    borderBottomRightRadius: 10,
  },
  titleButton: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 18,
  },
});

const swiperStyles = StyleSheet.create({
  activeDotSwiper: {
    backgroundColor: '#000',
    height: 12,
    width: 12,
    borderRadius: 50,
    marginLeft: 20,
  },
  inactiveDotSwiper: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    height: 12,
    width: 12,
    borderRadius: 50,
    marginLeft: 20,
  },
  containerSwiper: {
    marginBottom: 15,
  },
});

const swiperHomeStyles = StyleSheet.create({
  image: {
    width: 'auto',
    height: 310,
  },
  container: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  title: {
    fontSize: 27,
    fontFamily: 'AktivGroteskCorp-Bold',
    color: Colors.PRIMARY,
    marginTop: 15,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  subTitle: {
    fontFamily: 'AktivGroteskCorp-Light',
    fontSize: 15,
  },
  containerButton: {
    marginTop: 30,
  },
  button: {
    borderRadius: 20,
    height: 45,
  },
  textButton: {
    fontFamily: 'AktivGroteskCorp-Bold',
  },
});

export {
  splashStyles,
  loginStyles,
  newStyles,
  containerGeneral,
  headerStyles,
  drawerStyles,
  Colors,
  modalStepper,
  swiperStyles,
  swiperHomeStyles,
  tabNavigationStyles,
  switcherStyles,
};
