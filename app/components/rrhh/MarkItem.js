import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../styles';
import {markItemStyles} from '../../styles/components';

const MarkItem = ({title, type, hour}) => {
  const typesObj = {
    status1: {types: ['P', 'FR', 'PE', 'DM'], color: Colors.GREEN},
    status2: {types: ['T', 'FNR', 'S'], color: Colors.SECONDARY},
    status3: {types: ['LSG', 'LCG'], color: Colors.BLUE},
  };

  let colorItem = null;
  Object.values(typesObj).forEach(
    ({types, color}) => types.includes(type) && (colorItem = color),
  );

  return (
    <View style={[markItemStyles.container, {borderColor: colorItem}]}>
      <View style={[markItemStyles.label, {backgroundColor: colorItem}]}>
        <Text style={markItemStyles.labelText}>{type}</Text>
      </View>
      <View style={markItemStyles.content}>
        <Text style={[markItemStyles.title, {color: colorItem}]}>{title}</Text>
        <Text style={[markItemStyles.hour, {color: colorItem}]}>{hour}</Text>
      </View>
    </View>
  );
};

export default MarkItem;
