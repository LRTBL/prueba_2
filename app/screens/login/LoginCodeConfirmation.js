import React from 'react';
import {View, Image, StatusBar, ScrollView, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {loginStyles, Colors} from '../../styles';
import {Input, Button} from 'react-native-elements';
import {Toast} from 'native-base';

const LoginCodeConfirmation = ({navigation}) => {
  const [state, setState] = React.useState({
    codeConfirmation: '',
    isLoading: false,
  });
  const {codeConfirmation, isLoading} = state;
  const {codeVerification, idColaborator, username} = navigation.getParam(
    'state',
  );

  const handleValidate = async () => {
    setState({...state, isLoading: true});
    if (codeConfirmation.trim() === codeVerification) {
      Toast.show({
        text: 'Código correcto, ingrese su nueva contraseña',
        type: 'success',
        duration: 3000,
      });
      setState({...state, isLoading: false, codeConfirmation: ''});
      navigation.navigate('LoginResetPassword', {
        state: {idColaborator, username},
      });
    } else {
      setState({...state, isLoading: false, codeConfirmation: ''});
      Toast.show({
        text: 'Código incorrecto',
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
            <Text style={loginStyles.textFirst}>
              *Ingresa el código que se te envio a tu correo para reestablecer
              tu contraseña
            </Text>
            <Input
              value={codeConfirmation}
              placeholder="Código de confirmación"
              placeholderTextColor={Colors.WHITE}
              style={loginStyles.inputText}
              inputContainerStyle={loginStyles.inputContainer}
              inputStyle={{color: Colors.WHITE}}
              onChange={(e) =>
                setState({...state, codeConfirmation: e.nativeEvent.text})
              }
            />
            <View style={loginStyles.containerBtn}>
              <Button
                title="VALIDAR"
                disabled={codeConfirmation.length === 0 ? true : false}
                onPress={handleValidate}
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

export default LoginCodeConfirmation;
