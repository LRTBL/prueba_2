import React from 'react';
import {View, Image, StatusBar, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loginStyles, Colors} from '../../styles';
import {Input, Button} from 'react-native-elements';
import sha512 from 'js-sha512';
import {Toast} from 'native-base';
import {resetPassword} from '../../api/login.api';

const LoginResetPassword = ({navigation}) => {
  const [state, setState] = React.useState({
    newPass: '',
    newPassRe: '',
    isLoading: false,
  });
  const {newPass, newPassRe, isLoading} = state;
  const {idColaborator, username} = navigation.getParam('state');
  const handleLogin = async () => {
    setState({...state, isLoading: true});
    if (newPass === newPassRe) {
      try {
        const passEncript = sha512(newPass).substring(0, 100);
        await resetPassword(idColaborator, username, passEncript);
        setState({...state, isLoading: false, newPass: '', newPassRe: ''});
        Toast.show({
          text: 'Contraseña guardada exitosamente',
          type: 'success',
          duration: 3000,
        });
        navigation.navigate('LoginScreen');
      } catch (e) {
        setState({...state, isLoading: false, newPass: '', newPassRe: ''});
        Toast.show({
          text: 'Ocurrio un error, vuelvalo a intentar mas tarde',
          type: 'dander',
          duration: 3000,
        });
      }
    } else {
      setState({...state, isLoading: false, newPass: '', newPassRe: ''});
      Toast.show({
        text: 'Las contraseñas no coinciden',
        type: 'warning',
        duration: 3000,
      });
    }
  };

  return (
    <ScrollView style={loginStyles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View>
          <StatusBar translucent={true} backgroundColor={Colors.PRIMARY} />
          <View style={loginStyles.containerImageShop}>
            <Image
              source={require('../../resources/images/loginImg.png')}
              style={loginStyles.imageShop}
            />
          </View>
          <View style={loginStyles.containerImageLogo}>
            <Image
              source={require('../../resources/images/logo.png')}
              style={loginStyles.imageLogo}
            />
          </View>
          <View style={loginStyles.formContainer}>
            <Input
              value={newPass}
              placeholder="Nueva contraseña"
              secureTextEntry={true}
              password={true}
              placeholderTextColor={Colors.WHITE}
              style={loginStyles.inputText}
              inputContainerStyle={loginStyles.inputContainer}
              inputStyle={{color: Colors.WHITE}}
              onChange={(e) =>
                setState({...state, newPass: e.nativeEvent.text})
              }
            />
            <Input
              value={newPassRe}
              placeholder="Repite nueva contraseña"
              secureTextEntry={true}
              password={true}
              style={loginStyles.inputText}
              placeholderTextColor={Colors.WHITE}
              inputContainerStyle={loginStyles.inputContainer}
              inputStyle={{color: Colors.WHITE}}
              onChange={(e) =>
                setState({...state, newPassRe: e.nativeEvent.text})
              }
            />
            <View style={loginStyles.containerBtn}>
              <Button
                title="GUARDAR"
                disabled={
                  newPass.length === 0 || newPassRe.length === 0 ? true : false
                }
                onPress={handleLogin}
                loading={isLoading}
                loadingProps={{color: Colors.SECONDARY, size: 'large'}}
                containerStyle={loginStyles.btnContainerLogin}
                buttonStyle={loginStyles.btnStyle}
                titleStyle={loginStyles.textBtnLogin}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default LoginResetPassword;
