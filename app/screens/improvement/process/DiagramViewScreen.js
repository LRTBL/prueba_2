import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {HeaderApp} from '../../../components';
import {containerGeneral, Colors} from '../../../styles';
import {imageViewStyles} from '../../../styles/components';
import {diagramViewStyles} from '../../../styles/screens';
import ImageViewer from 'react-native-image-zoom-viewer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';

const DiagramViewScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const {title, contenido, pdf, image} = navigation.getParam('state');

  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <View style={imageViewStyles.container}>
        <ScrollView>
          <View
            style={[
              imageViewStyles.contentContainer,
              diagramViewStyles.container,
            ]}>
            <Text style={[imageViewStyles.title, {color: Colors.GREEN}]}>
              {title}
            </Text>
            <Text style={imageViewStyles.contentText}>{contenido}</Text>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
              }}
              style={diagramViewStyles.imageContainer}>
              <Image source={{uri: image}} style={diagramViewStyles.image} />
            </TouchableOpacity>
            <View>
              <Text style={diagramViewStyles.text}>Conoce las políticas</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PdfViewScreen', {
                    state: {file: pdf, color: Colors.GREEN},
                  });
                }}
                style={diagramViewStyles.containerAlert}>
                <FontAwesomeIcon
                  icon={faFileAlt}
                  size={23}
                  color={Colors.GREEN}
                />
                <Text style={diagramViewStyles.textAlert}>
                  POLÍTICAS DE DONACIÓN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Modal visible={visible} transparent>
          <ImageViewer
            backgroundColor={Colors.GREY_GRADIEND}
            imageUrls={[{url: image}]}
            onSwipeDown={() => {
              setVisible(!visible);
            }}
            renderFooter={() => (
              <View style={imageViewStyles.footerImage}>
                <Text style={imageViewStyles.footerText}>
                  Desliza abajo para salir
                </Text>
              </View>
            )}
            enableSwipeDown={true}
          />
        </Modal>
      </View>
    </View>
  );
};

export default DiagramViewScreen;
