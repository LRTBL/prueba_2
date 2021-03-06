import React from 'react';
import {View} from 'react-native';
import {containerGeneral} from '../styles';
import {HeaderApp, PdfViewer} from '../components';

const PdfViewTest = ({navigation}) => {
  const {file, color} = navigation.getParam('state');
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <PdfViewer file={file} btnColor={color} />
    </View>
  );
};

export default PdfViewTest;
