import React from 'react';
import {View} from 'react-native';
import {containerGeneral} from '../../../styles';
import {HeaderApp, ImageView} from '../../../components';

const AdviceViewScreen = ({navigation}) => {
  const {
    title,
    contenido,
    pdf,
    image,
    colorTitle,
    colorButton,
  } = navigation.getParam('state');
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <ImageView
        title={title}
        content={contenido}
        image={image}
        titleColor={colorTitle}
        shareColor={colorButton}
        file={pdf}
      />
    </View>
  );
};

export default AdviceViewScreen;
