import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../styles';
import {promotionCorporateStyles} from '../../styles/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

const PromotionItemCorporate = ({
  titulo,
  fecha_ini,
  fecha_fin,
  aplica,
  codigo,
  legal,
  toggleModal,
}) => {
  return (
    <View style={promotionCorporateStyles.container}>
      <View style={promotionCorporateStyles.titleContainer}>
        <Text style={promotionCorporateStyles.title}>{titulo}</Text>
      </View>
      <View style={promotionCorporateStyles.bodyContainer}>
        <View style={promotionCorporateStyles.firstLine}>
          <View style={promotionCorporateStyles.lineText}>
            <Text style={promotionCorporateStyles.labelText}>
              Fecha inicio:{' '}
            </Text>
            <Text style={promotionCorporateStyles.text}>{fecha_ini}</Text>
          </View>
          <View style={promotionCorporateStyles.secondContainer}>
            <Text style={promotionCorporateStyles.labelText}>Fecha fin: </Text>
            <Text style={promotionCorporateStyles.text}>{fecha_fin}</Text>
          </View>
        </View>
        <View style={promotionCorporateStyles.secondLine}>
          <View style={promotionCorporateStyles.lineText}>
            <Text style={promotionCorporateStyles.labelText}>
              Aplica para:{' '}
            </Text>
            <Text style={promotionCorporateStyles.secondText}>{aplica}</Text>
          </View>
          <View style={promotionCorporateStyles.secondContainer}>
            <Text style={promotionCorporateStyles.labelText}>Código: </Text>
            <Text style={promotionCorporateStyles.secondText}>{codigo}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          toggleModal(legal, titulo);
        }}
        style={promotionCorporateStyles.btnContainer}>
        <FontAwesomeIcon icon={faBook} size={12} color={Colors.BLACK} />
        <Text style={promotionCorporateStyles.btnText}>
          Ver legales de alianza
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromotionItemCorporate;
