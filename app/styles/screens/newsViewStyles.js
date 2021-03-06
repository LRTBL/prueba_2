import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const newsViewStyles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  containerContent: {
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 21,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  content: {
    marginTop: 15,
    fontSize: 15,
  },
  hourContainer: {
    backgroundColor: Colors.GREY,
    marginTop: 20,
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  hourText: {
    color: '#707070',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  containerSwiper: {
    height: 390,
    marginBottom: 20,
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 20,
    height: 300,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 20,
  },
  shareButton: {
    backgroundColor: Colors.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  textShareButton: {
    color: Colors.WHITE,
    fontSize: 17,
    marginLeft: 20,
  },
});

export default newsViewStyles;
