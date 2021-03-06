import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {containerGeneral, Colors} from '../../../styles';
import {profileStyles} from '../../../styles/screens';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const VoucherScreen = () => {
  return (
    <View style={containerGeneral.margin}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontFamily: 'AktivGroteskCorp-Bold',
            fontSize: 15,
          }}>
          {' '}
          MI BOLETA DE PAGO{' '}
        </Text>
        <FontAwesomeIcon icon={faFileAlt} size={80} color={Colors.GREY} />
        <Text>
          Recuerda que esta boleta corresponde al mes anterior y podrás
          descargarla solo hasta el último día del presente mes.
        </Text>

        <Button
          title="DESCARGA AQUI"
          // onPress={() => {
          //   navigation.navigate('ProfileEditScreen');
          // }}
          containerStyle={profileStyles.containerBtn}
          buttonStyle={profileStyles.btn}
          titleStyle={profileStyles.btnText}
          loadingProps={{color: Colors.SECONDARY, size: 'large'}}
        />
      </View>
    </View>
  );
};

export default VoucherScreen;
