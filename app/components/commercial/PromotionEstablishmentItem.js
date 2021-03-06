import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../../styles';
import {itemEstablishmentStyles} from '../../styles/components';

const PromotionEstablishmentItem = ({local, direction, hour}) => {
  return (
    <TouchableOpacity disabled style={itemEstablishmentStyles.container}>
      <View style={itemEstablishmentStyles.contentContainer}>
        <Icon
          name="map-pin"
          type="feather"
          color={Colors.SECONDARY}
          size={35}
        />
        <View style={itemEstablishmentStyles.textContainer}>
          <Text style={itemEstablishmentStyles.local}>{local}</Text>
          <Text style={itemEstablishmentStyles.direction}>{direction}</Text>
        </View>
      </View>
      <View style={itemEstablishmentStyles.hourContainer}>
        <Text style={itemEstablishmentStyles.hour}>Horario: {hour}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PromotionEstablishmentItem;
