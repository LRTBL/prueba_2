import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const guidesStyles = StyleSheet.create({
  container: {marginLeft: 30, marginRight: 30, marginTop: 40, height: 490},
  firstSwiperContainer: {height: 100},
  firstImages: {height: 400, width: '100%', borderRadius: 20},
  containerText: {alignItems: 'center'},
  firstText: {
    color: Colors.GREEN,
    fontFamily: 'AktivGroteskCorp-Bold',
    fontSize: 20,
    height: 25,
  },
  secondText: {
    color: Colors.BLACK,
    fontSize: 21,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  subText: {marginTop: 25, fontSize: 15, fontFamily: 'AktivGroteskCorp-Light'},
  secondSwiperContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 60,
    height: 410,
  },
  secondImagesContainer: {
    alignItems: 'center',
  },
  secondImages: {
    height: 300,
    width: '50%',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    color: '#707070',
    marginTop: 15,
    fontFamily: 'AktivGroteskCorp-Bold',
  },
  btnSwiper: {
    color: Colors.GREEN,
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  containerWarranty: {
    marginRight: 40,
    marginLeft: 40,
  },
  titleWarranty: {
    fontSize: 18,
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 20,
    fontFamily: 'AktivGroteskCorp-Bold',
    color: Colors.PRIMARY,
  },
  planWarranty: {
    width: '100%',
    height: 135,
  },
  forWarranty: {
    width: '100%',
    height: 70,
  },
});

export default guidesStyles;
