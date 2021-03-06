import React from 'react';
import {View, Text} from 'react-native';
import {containerGeneral} from '../../styles';
import {HeaderApp} from '../../components';

const StockScreen = ({navigation}) => {
  return (
    <View style={containerGeneral.container}>
      <HeaderApp title="Stock" navigation={navigation} />
      <Text>Screen de Comercial- Stock </Text>
    </View>
  );
};

export default StockScreen;
