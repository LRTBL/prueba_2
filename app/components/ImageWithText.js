import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {adviceItemStyles} from '../styles/components';
import {Colors} from '../styles';

const ImageWithText = ({
  image,
  title,
  contenido,
  color,
  toNavigate,
  navigation,
  pdf,
  colorTitle,
  colorButton,
}) => {
  return (
    <TouchableOpacity
      style={adviceItemStyles.container}
      onPress={() => {
        navigation.navigate(toNavigate, {
          state: {title, contenido, pdf, image, colorTitle, colorButton},
        });
      }}>
      <Image source={{uri: image}} style={adviceItemStyles.image} />
      <View style={[adviceItemStyles.textContainer, {backgroundColor: color}]}>
        <View style={adviceItemStyles.textSubContainer}>
          <Text style={adviceItemStyles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={adviceItemStyles.text} numberOfLines={1}>
            {contenido}
          </Text>
        </View>
        <View style={adviceItemStyles.icon}>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={20}
            color={Colors.WHITE}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(ImageWithText);
