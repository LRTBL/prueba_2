import {StyleSheet} from 'react-native';
import Colors from '../Colors';

const imageSwaperStyles = StyleSheet.create({
  container: {
    height: 245,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 245,
    width: '100%',
    borderRadius: 20,
  },
  contentContainer: {
    position: 'absolute',
    top: 160,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 0,
  },
  content: {color: '#fff', padding: 0, fontSize: 12},
});

export default imageSwaperStyles;
