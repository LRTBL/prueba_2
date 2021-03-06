import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {concourseItemStyles} from '../styles/components';

const ConcourseItem = ({
  state,
  image,
  color,
  navigation,
  id,
  type,
  viewColor,
  titleColor,
}) => {
  return (
    <TouchableOpacity
      style={concourseItemStyles.container}
      onPress={() => {
        navigation.navigate('ConcourseViewScreen', {
          state: {
            id: id,
            color: viewColor,
            titleColor: titleColor,
            type: type,
          },
        });
      }}>
      <Image source={{uri: image}} style={concourseItemStyles.image} />
      {state === 'TER' && (
        <View
          style={[
            concourseItemStyles.terminateContainer,
            {backgroundColor: color},
          ]}>
          <FontAwesomeIcon
            icon={faCheckCircle}
            size={20}
            color={'white'}
            style={concourseItemStyles.icon}
          />
          <View style={concourseItemStyles.terminateText}>
            <Text style={concourseItemStyles.terminateTitle}>
              CONCURSO TERMINADO
            </Text>
            <Text style={concourseItemStyles.terminateSubTitle}>
              Conoce a los proyectos ganadores
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ConcourseItem;
