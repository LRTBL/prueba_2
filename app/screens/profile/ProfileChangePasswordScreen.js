import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {View, Text, ScrollView} from 'react-native';
import {sha512} from 'js-sha512';
import {Input, Button} from 'react-native-elements';
import {HeaderApp} from '../../components';
import {Colors, containerGeneral} from '../../styles';
import {profileEditStyles, profileStyles} from '../../styles/screens';
import {Toast} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLock, faKey} from '@fortawesome/free-solid-svg-icons';
import {editPassword} from '../../api/profile.api';
import AppContext from '../../AppContext';

const ProfileChangePasswordScreen = ({navigation}) => {
  const [state, setState] = React.useState({
    lastPass: '',
    newPass: '',
    secondNewPass: '',
    isLoading: false,
  });

  const {
    app: {auth},
  } = React.useContext(AppContext);

  const handleChangePass = async () => {
    setState({...state, isLoading: true});
    if (state.newPass === state.secondNewPass) {
      const encriptLass = sha512(state.lastPass).substring(0, 100);
      const encriptNew = sha512(state.newPass).substring(0, 100);
      try {
        await editPassword(auth.PERSONA, encriptLass, encriptNew);
        Toast.show({
          text: 'Contraseña restablecida exitosamente',
          type: 'success',
          duration: 3000,
        });
      } catch (err) {
        Toast.show({
          text: 'La contraseña actual no es correcta',
          type: 'danger',
          duration: 3000,
        });
      }
    } else {
      Toast.show({
        text: 'La nueva contraseña no coinciden',
        type: 'warning',
        duration: 3000,
      });
    }
    setState({
      lastPass: '',
      newPass: '',
      secondNewPass: '',
      isLoading: false,
    });
  };
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <ScrollView>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={profileEditStyles.container}>
            <Text style={profileEditStyles.title}>CAMBIAR CONTRASEÑA</Text>
            <Input
              value={state.lastPass}
              secureTextEntry={true}
              password={true}
              placeholder="Contraseña actual*"
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon
                  icon={faKey}
                  size={17}
                  color={Colors.PRIMARY}
                />
              }
              placeholderTextColor={Colors.PRIMARY}
              inputContainerStyle={profileEditStyles.inputContainer}
              inputStyle={profileEditStyles.inputBtn}
              onChange={(e) => {
                setState({...state, lastPass: e.nativeEvent.text});
              }}
            />
            <Input
              value={state.newPass}
              secureTextEntry={true}
              password={true}
              placeholder="Nueva contraseña*"
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon
                  icon={faLock}
                  size={17}
                  color={Colors.PRIMARY}
                />
              }
              placeholderTextColor={Colors.PRIMARY}
              inputContainerStyle={profileEditStyles.inputContainer}
              inputStyle={profileEditStyles.inputBtn}
              onChange={(e) => {
                setState({...state, newPass: e.nativeEvent.text});
              }}
            />
            <Input
              value={state.secondNewPass}
              secureTextEntry={true}
              password={true}
              placeholder="Repite nueva contraseña*"
              containerStyle={profileEditStyles.containerBtn}
              leftIconContainerStyle={profileEditStyles.iconLeftBtn}
              leftIcon={
                <FontAwesomeIcon
                  icon={faLock}
                  size={17}
                  color={Colors.PRIMARY}
                />
              }
              placeholderTextColor={Colors.PRIMARY}
              inputContainerStyle={profileEditStyles.inputContainer}
              inputStyle={profileEditStyles.inputBtn}
              onChange={(e) => {
                setState({...state, secondNewPass: e.nativeEvent.text});
              }}
            />

            <View style={profileEditStyles.btnContainer}>
              <Button
                disabled={
                  state.lastPass === '' ||
                  state.newPass === '' ||
                  state.secondNewPass === ''
                }
                loading={state.isLoading}
                title="GUARDAR"
                titleStyle={profileEditStyles.btnText}
                onPress={handleChangePass}
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

export default ProfileChangePasswordScreen;
