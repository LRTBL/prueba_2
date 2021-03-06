import React from 'react';
import * as Animatable from 'react-native-animatable';
import AppContext from '../AppContext';
import types from '../reducers/types';
import {View, StatusBar} from 'react-native';
import {splashStyles} from '../styles';
import {Toast} from 'native-base';
import {getUser} from '../storage/userAsyncStorage';
import {signIn} from '../api/login.api';

const SplashScreen = (props) => {
  const {dispatch} = React.useContext(AppContext);
  React.useEffect(() => {
    getUser().then((user) => {
      setTimeout(async () => {
        if (user) {
          try {
            const {data} = await signIn(user.code, user.pass);
            if (data.estado !== 4) {
              dispatch({
                type: types.LOGIN,
                payload: {data},
              });
              Toast.show({
                text: `Bienvenid@ ${data.NOMBRE} ${data.PATERNO} ${data.MATERNO}`,
                type: 'success',
                duration: 3000,
              });
              props.navigation.navigate('App');
            } else {
              props.navigation.navigate('LoginScreen');
            }
          } catch (e) {
            props.navigation.navigate('LoginScreen');
          }
        } else {
          props.navigation.navigate('LoginScreen');
        }
      }, 1500);
    });
  });

  return (
    <View style={splashStyles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={splashStyles.logo}
        source={require('../resources/images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
