import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {containerGeneral} from '../../../styles';
import {trainingViewStyles} from '../../../styles/screens';
import {HeaderApp} from '../../../components';
import {Button} from 'react-native-elements';
import {dateformatComplete} from '../../../utils/formatDate';

const TrainingViewScreen = ({navigation}) => {
  const {
    comentario,
    dirigido,
    duracion,
    facilitador,
    fec,
    lugar,
    medio,
    title,
    url_reu,
  } = navigation.getParam('state');
  return (
    <View style={containerGeneral.container}>
      <HeaderApp type="secondary" title="Información" navigation={navigation} />

      <ScrollView>
        <View style={trainingViewStyles.container}>
          <Text style={trainingViewStyles.title}>{title}</Text>
          <View>
            <View style={trainingViewStyles.containerBody}>
              <Text style={trainingViewStyles.key}>Dirigida a:</Text>
              <Text style={trainingViewStyles.value} numberOfLines={2}>
                {dirigido}
              </Text>
            </View>
            <View style={trainingViewStyles.containerBody}>
              <Text style={trainingViewStyles.key}>Facilitador:</Text>
              <Text style={trainingViewStyles.value}>{facilitador}</Text>
            </View>
            <View style={trainingViewStyles.containerBody}>
              <Text style={trainingViewStyles.key}>Medio:</Text>
              <Text style={trainingViewStyles.value}>{medio}</Text>
            </View>
            <View style={trainingViewStyles.containerBody}>
              <Text style={trainingViewStyles.key}>Lugar:</Text>
              <Text style={trainingViewStyles.value}>{lugar}</Text>
            </View>
            <View style={trainingViewStyles.containerBody}>
              <Text style={trainingViewStyles.key}>Fecha:</Text>
              <Text style={trainingViewStyles.value}>
                {dateformatComplete(new Date(fec), true)}
              </Text>
            </View>
            <View style={trainingViewStyles.containerBody}>
              <Text style={trainingViewStyles.key}>Duración:</Text>
              <Text style={trainingViewStyles.value}>{duracion}</Text>
            </View>
          </View>
          {comentario.length !== 0 && (
            <Text style={trainingViewStyles.comentary}>*{comentario}</Text>
          )}
          {url_reu.length !== 0 && (
            <Button
              onPress={() => {
                Linking.openURL(`https://meet.google.com/${url_reu}`);
              }}
              title="Ir a Reunión"
              buttonStyle={trainingViewStyles.btn}
              containerStyle={trainingViewStyles.btnContainer}
              titleStyle={trainingViewStyles.titleBtn}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TrainingViewScreen;
