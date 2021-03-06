import React from 'react';
import {
  View,
  Image,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loginStyles, Colors} from '../../styles';
import {Input, Button} from 'react-native-elements';
import {Toast} from 'native-base';
import sha512 from 'js-sha512';
import AppContext from '../../AppContext';
import types from '../../reducers/types';
import {signIn, sendEmailCode, verifyCode} from '../../api/login.api';
import {saveUser} from '../../storage/userAsyncStorage';

const LoginScreen = ({navigation}) => {
  const [state, setState] = React.useState({
    code: '',
    pass: '',
    isLoading: false,
    isLoadingForgot: false,
  });
  const {code, pass, isLoading, isLoadingForgot} = state;
  const {dispatch} = React.useContext(AppContext);

  const handleForgotPass = async () => {
    if (code.length === 0) {
      Toast.show({
        text: 'Ingresa tu código de colaborador',
        type: 'warning',
        duration: 2000,
      });
    } else {
      setState({...state, isLoadingForgot: true});
      try {
        const {
          data: {email, materno, nombre, paterno, id_persona},
        } = await verifyCode(code);
        if (email && email !== '') {
          try {
            const responseCode = await sendEmailCode(
              `${nombre} ${paterno} ${materno}`,
              email,
            );
            setState({...state, isLoadingForgot: false, code: ''});
            navigation.navigate('LoginCodeConfirmation', {
              state: {
                codeVerification: responseCode.code,
                idColaborator: id_persona,
                username: code,
              },
            });
          } catch (err) {
            setState({...state, isLoadingForgot: false, code: ''});
            Toast.show({
              text: 'Ocurrio un error, vuelvelo a intentar mas tarde',
              type: 'danger',
              duration: 3000,
            });
          }
        } else {
          setState({...state, isLoadingForgot: false, code: ''});
          Toast.show({
            text:
              'No cuenta con un correo electronico registrado, comuniquese con RRHH para poder ingresar',
            type: 'danger',
            duration: 3000,
          });
        }
      } catch (err) {
        setState({...state, isLoadingForgot: false, code: ''});
        Toast.show({
          text: 'Código de colaborador inválido',
          type: 'danger',
          duration: 3000,
        });
      }
    }
  };
  const handleLogin = async () => {
    setState({...state, isLoading: true});
    const passEncript = sha512(pass).substring(0, 100);
    try {
      const {data} = await signIn(code, passEncript);
      switch (data.estado) {
        case 1:
          dispatch({
            type: types.LOGIN,
            payload: {data},
          });
          await saveUser({code: code, pass: passEncript});
          Toast.show({
            text: `Bienvenido ${data.NOMBRE} ${data.PATERNO}`,
            type: 'success',
            duration: 3000,
          });
          setState({...state, isLoading: false, code: '', pass: ''});
          navigation.navigate('App');
          break;
        case 2:
          if (data.EMAIL === '' || !data.EMAIL) {
            Toast.show({
              text:
                'No cuenta con un correo electronico registrado, comuniquese con RRHH para poder ingresar',
              type: 'danger',
              duration: 3000,
            });
            setState({...state, isLoading: false, code: '', pass: ''});
          } else {
            try {
              const responseCode = await sendEmailCode(
                `${data.NOMBRE} ${data.PATERNO} ${data.MATERNO}`,
                data.EMAIL,
              );
              setState({...state, isLoading: false, code: '', pass: ''});
              navigation.navigate('LoginCodeConfirmation', {
                state: {
                  codeVerification: responseCode.code,
                  idColaborator: data.PERSONA,
                  username: state.code,
                },
              });
            } catch (e) {
              setState({...state, isLoading: false, code: '', pass: ''});
              Toast.show({
                text: 'Ocurrio un error, vuelvelo a intentar mas tarde',
                type: 'danger',
                duration: 3000,
              });
            }
          }
          break;
        case 3:
          setState({...state, isLoading: false, code: '', pass: ''});
          Toast.show({
            text: 'Usuario no valido',
            type: 'danger',
            duration: 3000,
          });
          break;
        case 4:
          setState({...state, isLoading: false, code: '', pass: ''});
          Toast.show({
            text: 'Contraseña invalida',
            type: 'warning',
            duration: 3000,
          });
          break;
        default:
          break;
      }
    } catch (err) {
      Toast.show({
        text: 'Ocurrio un error, vuelvelo a intentar mas tarde',
        type: 'danger',
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
            <Text style={loginStyles.textFirst}>
              *Si es la primera vez que ingresas a la aplicación ingresa 12345
              como contraseña
            </Text>
            <Input
              value={code}
              placeholder="Código de colaborador: (Ejm: E0049)"
              placeholderTextColor={Colors.WHITE}
              style={loginStyles.inputText}
              inputContainerStyle={loginStyles.inputContainer}
              inputStyle={{color: Colors.WHITE}}
              onChange={(e) => setState({...state, code: e.nativeEvent.text})}
            />
            <Input
              value={pass}
              placeholder="Contraseña"
              secureTextEntry={true}
              password={true}
              style={loginStyles.inputText}
              placeholderTextColor={Colors.WHITE}
              inputContainerStyle={loginStyles.inputContainer}
              inputStyle={{color: Colors.WHITE}}
              onChange={(e) => setState({...state, pass: e.nativeEvent.text})}
            />
            <View style={loginStyles.containerBtn}>
              <Button
                title="INGRESAR"
                disabled={code.length === 0 || pass.length === 0 ? true : false}
                onPress={handleLogin}
                loading={isLoading}
                loadingProps={{color: Colors.SECONDARY, size: 'large'}}
                containerStyle={loginStyles.btnContainerLogin}
                buttonStyle={loginStyles.btnStyle}
                titleStyle={loginStyles.textBtnLogin}
              />
              <TouchableOpacity
                onPress={handleForgotPass}
                style={loginStyles.containerForgotBtn}>
                {isLoadingForgot ? (
                  <ActivityIndicator size={25} color={Colors.SECONDARY} />
                ) : (
                  <Text style={loginStyles.forgotPassText}>
                    ¿Olvidaste tu contraseña?
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default LoginScreen;
