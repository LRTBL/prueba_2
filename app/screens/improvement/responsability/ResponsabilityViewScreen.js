import React from 'react';
import {View} from 'react-native';
import {containerGeneral, Colors} from '../../../styles';
import {HeaderApp, ImageView} from '../../../components';

const ResponsabilidadView = ({navigation}) => {
  const {title, image, content} = navigation.getParam('state');
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <ImageView
        title={title}
        image={image}
        content={content}
        shareColor={Colors.GREEN}
        titleColor={Colors.PRIMARY}
      />
    </View>
  );
};

export default ResponsabilidadView;
