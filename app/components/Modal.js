import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../styles';
import {modalStyles} from '../styles/components';

const Modal = ({visible, toggleModal, children}) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggleModal}
      backdropStyle={modalStyles.backdrop}
      overlayStyle={modalStyles.overlay}>
      <View style={modalStyles.content}>
        <View style={modalStyles.exit}>
          <TouchableOpacity onPress={toggleModal}>
            <FontAwesomeIcon
              icon={faTimesCircle}
              size={20}
              color={Colors.YELLOW}
            />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Overlay>
  );
};

export default Modal;
