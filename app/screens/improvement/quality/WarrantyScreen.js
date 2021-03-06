import React from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import qualityContent from '../../../data/qualityContent';
import ImageViewer from 'react-native-image-zoom-viewer';
import {guidesStyles} from '../../../styles/screens';
import {Colors} from '../../../styles';
import {imageViewStyles} from '../../../styles/components';

const WarrantyScreen = () => {
  const [state, setState] = React.useState({
    visible: false,
    imageSelected: '',
  });
  const {plantilla, forro} = qualityContent.warranty;
  return (
    <View style={guidesStyles.containerWarranty}>
      <Text style={guidesStyles.titleWarranty}>PLANTILLA</Text>
      <TouchableOpacity
        onPress={() => {
          setState({
            ...state,
            visible: !state.visible,
            imageSelected: plantilla,
          });
        }}>
        <Image source={{uri: plantilla}} style={guidesStyles.planWarranty} />
      </TouchableOpacity>
      <Text style={guidesStyles.titleWarranty}>FORRO</Text>
      <TouchableOpacity
        onPress={() => {
          setState({
            ...state,
            visible: !state.visible,
            imageSelected: forro,
          });
        }}>
        <Image source={{uri: forro}} style={guidesStyles.forWarranty} />
      </TouchableOpacity>
      <Modal visible={state.visible} transparent>
        <ImageViewer
          imageUrls={[{url: state.imageSelected}]}
          backgroundColor={Colors.GREY_GRADIEND}
          onSwipeDown={() => {
            setState({...state, visible: !state.visible});
          }}
          enableSwipeDown={true}
          renderFooter={() => (
            <View style={imageViewStyles.footerImage}>
              <Text style={imageViewStyles.footerText}>
                Desliza abajo para salir
              </Text>
            </View>
          )}
        />
      </Modal>
    </View>
  );
};

export default WarrantyScreen;
