import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Overlay} from 'react-native-elements';
import {modalStepper} from '../styles';

const ModalStepper = ({visible, toggleModal, handleConfirm, children}) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleModal}
      backdropStyle={modalStepper.backColor}
      overlayStyle={modalStepper.container}>
      <View>
        {children}
        <View style={modalStepper.containerButtons}>
          <TouchableOpacity
            onPress={handleConfirm}
            style={modalStepper.containerButtonLeft}>
            <Text style={modalStepper.titleButton}>SI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleModal}
            style={modalStepper.containerButtonRight}>
            <Text style={modalStepper.titleButton}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Overlay>
  );
};

export default ModalStepper;
