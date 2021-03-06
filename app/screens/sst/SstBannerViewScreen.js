import React from 'react';
import {View} from 'react-native';
import {containerGeneral, Colors} from '../../styles';
import {HeaderApp, ImageView} from '../../components';

const SttImagesView = ({navigation}) => {
  const {title, image} = navigation.getParam('state');
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <ImageView
        title={title}
        image={image}
        shareColor={Colors.BLUE}
        titleColor={Colors.BLUE}
      />
    </View>
  );
};

export default SttImagesView;
