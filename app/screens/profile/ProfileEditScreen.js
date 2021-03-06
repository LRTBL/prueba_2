import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {HeaderApp} from '../../components';
import {Colors, containerGeneral} from '../../styles';
import {profileEditStyles, profileStyles} from '../../styles/screens';
import AppContext from '../../AppContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {editProfile} from '../../api/profile.api';
import types from '../../reducers/types';
import {Toast} from 'native-base';
import {
  faUser,
  faPhone,
  faIdCard,
  faIdCardAlt,
  faEnvelope,
  faLaughBeam,
  faMusic,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

const ProfileEditScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    app: {auth},
    dispatch,
  } = React.useContext(AppContext);

  const {
    NOMBRE,
    PATERNO,
    MATERNO,
    EMAIL,
    NUMERODOCUMENTO,
    codigo,
    celular,
    hobbie,
    comida_favorita,
    genero_musical,
  } = auth;

  const [state, setState] = React.useState({
    phone: celular || '',
    hobby: hobbie || '',
    foot: comida_favorita || '',
    music: genero_musical || '',
  });

  const handleSaveProfile = async () => {
    if (state.phone.length === 9) {
      setIsLoading(true);
      try {
        await editProfile(
          auth.PERSONA,
          state.phone,
          state.hobby,
          state.foot,
          state.music,
        );
        dispatch({
          type: types.EDIT_PROFILE,
          payload: {
            hobbie: state.hobby,
            music: state.music,
            foot: state.foot,
            phone: state.phone,
          },
        });
        setIsLoading(false);
        Toast.show({
          text: 'Datos actualizados correctamente',
          type: 'success',
          duration: 2000,
        });
      } catch (err) {
        setIsLoading(false);
        Toast.show({
          text:
            'Ocurrió un error al actualizar los datos, porfavor inténtelo más tarde',
          type: 'danger',
          duration: 2000,
        });
      }
    } else {
      setIsLoading(false);
      Toast.show({
        text: 'El número de celular es invalido',
        type: 'warning',
        duration: 2000,
      });
    }
  };

  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <ScrollView>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={profileEditStyles.container}>
            <Text style={profileEditStyles.title}>EDITAR DATOS</Text>
            <Input
              disabled
              placeholder={NOMBRE}
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon icon={faUser} size={17} color={'black'} />
              }
              placeholderTextColor={Colors.BLACK}
              inputContainerStyle={profileEditStyles.inputContainerDisabled}
              inputStyle={profileEditStyles.inputBtn}
            />
            <Input
              disabled
              style={profileEditStyles.fontBtn}
              placeholder={`${PATERNO} ${MATERNO}`}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon icon={faUser} size={17} color={'black'} />
              }
              placeholderTextColor={Colors.BLACK}
              inputContainerStyle={profileEditStyles.inputContainerDisabled}
              inputStyle={profileEditStyles.inputBtn}
            />
            <Input
              disabled
              placeholder={codigo}
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon icon={faIdCardAlt} size={17} color={'black'} />
              }
              placeholderTextColor={Colors.BLACK}
              inputContainerStyle={profileEditStyles.inputContainerDisabled}
              inputStyle={profileEditStyles.inputBtn}
            />
            <Input
              disabled
              placeholder={NUMERODOCUMENTO}
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon icon={faIdCard} size={17} color={'black'} />
              }
              placeholderTextColor={Colors.BLACK}
              inputContainerStyle={profileEditStyles.inputContainerDisabled}
              inputStyle={profileEditStyles.inputBtn}
            />
            <Input
              disabled
              placeholder={EMAIL}
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon icon={faEnvelope} size={17} color={'black'} />
              }
              placeholderTextColor={Colors.BLACK}
              inputContainerStyle={profileEditStyles.inputContainerDisabled}
              inputStyle={profileEditStyles.inputBtn}
            />
            <Input
              value={state.phone ? state.phone : ''}
              placeholder="Teléfono*"
              keyboardType="numeric"
              maxLength={9}
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon
                  icon={faPhone}
                  size={17}
                  color={Colors.PRIMARY}
                />
              }
              placeholderTextColor={Colors.PRIMARY}
              inputContainerStyle={profileEditStyles.inputContainer}
              inputStyle={profileEditStyles.inputBtn}
              onChange={(e) => {
                setState({...state, phone: e.nativeEvent.text});
              }}
            />
            <Text style={profileEditStyles.textQuestion}>
              ¿Cuál es tu hobby?
            </Text>
            <Input
              value={state.hobby ? state.hobby : ''}
              onChange={(e) => {
                setState({...state, hobby: e.nativeEvent.text});
              }}
              placeholder="Hobby*"
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon
                  icon={faLaughBeam}
                  size={17}
                  color={Colors.PRIMARY}
                />
              }
              placeholderTextColor={Colors.PRIMARY}
              inputContainerStyle={profileEditStyles.inputContainer}
              inputStyle={profileEditStyles.inputBtn}
            />
            <Text style={profileEditStyles.textQuestion}>
              ¿Cuál es tu comida favorita?
            </Text>
            <Input
              value={state.foot ? state.foot : ''}
              onChange={(e) => {
                setState({...state, foot: e.nativeEvent.text});
              }}
              placeholder="Comida favorita*"
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon
                  icon={faUtensils}
                  size={17}
                  color={Colors.PRIMARY}
                />
              }
              placeholderTextColor={Colors.PRIMARY}
              inputContainerStyle={profileEditStyles.inputContainer}
              inputStyle={profileEditStyles.inputBtn}
            />
            <Text style={profileEditStyles.textQuestion}>
              ¿Cuál es tu género musical y/o artista favorito?
            </Text>
            <Input
              value={state.music ? state.music : ''}
              onChange={(e) => {
                setState({...state, music: e.nativeEvent.text});
              }}
              placeholder="Género musical y/o artista*"
              style={profileEditStyles.fontBtn}
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon
                  icon={faMusic}
                  size={17}
                  color={Colors.PRIMARY}
                />
              }
              placeholderTextColor={Colors.PRIMARY}
              inputContainerStyle={profileEditStyles.inputContainer}
              inputStyle={profileEditStyles.inputBtn}
            />
            <View style={profileEditStyles.btnContainer}>
              <Button
                title="GUARDAR"
                onPress={handleSaveProfile}
                titleStyle={profileEditStyles.btnText}
                loading={isLoading}
                buttonStyle={profileStyles.btn}
                loadingProps={{color: Colors.SECONDARY, size: 'large'}}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </View>
  );
};

export default ProfileEditScreen;
