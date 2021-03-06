import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {containerGeneral, Colors} from '../../styles';
import {profileStyles} from '../../styles/screens';
import {HeaderApp} from '../../components';
import {Avatar, Button} from 'react-native-elements';
import AppContext from '../../AppContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPhone,
  faIdCard,
  faIdCardAlt,
  faEnvelope,
  faLaughBeam,
  faMusic,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = ({navigation}) => {
  const {
    app: {auth},
  } = React.useContext(AppContext);
  const {PATERNO, MATERNO, NOMBRE} = auth;
  const personal_data = [
    {
      icon: <FontAwesomeIcon icon={faIdCardAlt} size={22} color={'black'} />,
      name: 'Código',
      label: 'codigo',
    },
    {
      icon: <FontAwesomeIcon icon={faIdCard} size={22} color={'black'} />,
      name: 'DNI',
      label: 'NUMERODOCUMENTO',
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} size={20} color={'black'} />,
      name: 'Celular',
      label: 'celular',
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} size={20} color={'black'} />,
      name: 'Correo',
      label: 'EMAIL',
    },
  ];
  const personal_description = [
    {
      icon: <FontAwesomeIcon icon={faLaughBeam} size={22} color={'black'} />,
      label: 'hobbie',
    },
    {
      icon: <FontAwesomeIcon icon={faUtensils} size={22} color={'black'} />,
      label: 'comida_favorita',
    },
    {
      icon: <FontAwesomeIcon icon={faMusic} size={22} color={'black'} />,
      label: 'genero_musical',
    },
  ];
  return (
    <View style={containerGeneral.container}>
      <HeaderApp title="Perfil" navigation={navigation} />
      <ScrollView>
        <View style={profileStyles.containerAvatar}>
          <Avatar
            containerStyle={profileStyles.avatar}
            titleStyle={profileStyles.avatarTitle}
            rounded
            size={100}
            title={PATERNO[0] + MATERNO[0]}
          />
          <Text
            style={
              profileStyles.userName
            }>{`${NOMBRE} ${PATERNO} ${MATERNO}`}</Text>
        </View>
        <View style={profileStyles.containerPersonal}>
          {personal_data.map(({icon, name, label}, key) => {
            return (
              <View key={key} style={profileStyles.dataContainer}>
                {icon}
                <View style={profileStyles.profileContainer}>
                  <Text style={profileStyles.profileName}>{name}:</Text>
                  <Text style={profileStyles.profileLabel}>
                    {auth[label] ? auth[label] : ''}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View>
          <Text style={profileStyles.descriptionTitle}>Mi descripción</Text>
          <View style={profileStyles.descriptionContainer}>
            {personal_description.map(({icon, label}, key) => {
              return (
                <View key={key} style={profileStyles.dataContainer}>
                  {icon}
                  <View style={profileStyles.profileContainer}>
                    <Text style={profileStyles.profileLabel}>
                      {auth[label] || '-'}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <View style={profileStyles.containerBtns}>
          <Button
            title="EDITAR DATOS"
            onPress={() => {
              navigation.navigate('ProfileEditScreen');
            }}
            containerStyle={profileStyles.containerBtn}
            buttonStyle={profileStyles.btn}
            titleStyle={profileStyles.btnText}
            loadingProps={{color: Colors.SECONDARY, size: 'large'}}
          />
          <Button
            title="CAMBIAR CONTRASEÑA"
            onPress={() => {
              navigation.navigate('ProfileChangePasswordScreen');
            }}
            containerStyle={profileStyles.containerBtn}
            titleStyle={profileStyles.btnText}
            buttonStyle={profileStyles.btn}
            loadingProps={{color: Colors.SECONDARY, size: 'large'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
