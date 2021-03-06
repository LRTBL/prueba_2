import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFileAlt, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {itemQualityStyles} from '../../styles/components';
import {Colors} from '../../styles';

const ItemQuality = ({title, description, navigation, file}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PdfViewScreen', {
          state: {file, color: Colors.GREEN},
        });
      }}
      style={itemQualityStyles.container}>
      <View style={itemQualityStyles.title}>
        <FontAwesomeIcon icon={faFileAlt} size={20} color={Colors.GREEN} />
        <Text style={itemQualityStyles.titleText}>{title}</Text>
      </View>
      <Text style={itemQualityStyles.descriptionText}>{description}</Text>
      <View style={itemQualityStyles.presentationContainer}>
        <Text style={itemQualityStyles.presentationText}>Ver presentación</Text>
        <FontAwesomeIcon icon={faChevronRight} size={20} color={Colors.GREEN} />
      </View>
    </TouchableOpacity>
  );
};

export default ItemQuality;
