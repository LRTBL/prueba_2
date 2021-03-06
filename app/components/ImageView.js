import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Share,
  Image,
  Modal,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFileAlt, faShareSquare} from '@fortawesome/free-solid-svg-icons';
import ImageViewer from 'react-native-image-zoom-viewer';
import {Colors} from '../styles';
import {imageViewStyles} from '../styles/components';
import {withNavigation} from 'react-navigation';

const ImageView = ({
  title,
  image,
  shareColor,
  titleColor,
  file,
  content,
  navigation,
}) => {
  const [visible, setVisible] = React.useState(false);
  const handleShare = () => {
    Share.share(
      {
        message: `¡Hola! Te comparto esta publicacion de la aplicación de Footloose Colaboradores: 
        ${image}`,
        title: 'Compartir Publicación Footloose Colaboradores',
      },
      {
        // Android only:
        dialogTitle: 'Compartir Publicación Footloose Colaboradores',
        // iOS only:
        excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      },
    );
  };
  return (
    <View style={imageViewStyles.container}>
      <ScrollView>
        <View style={imageViewStyles.contentContainer}>
          <Text style={[imageViewStyles.title, {color: titleColor}]}>
            {title}
          </Text>
          <Text style={imageViewStyles.contentText}>{content}</Text>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}>
            <Image source={{uri: image}} style={imageViewStyles.image} />
          </TouchableOpacity>
          <>
            {file !== '' && file && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PdfViewScreen', {
                    state: {file, color: Colors.SECONDARY},
                  });
                }}
                style={imageViewStyles.fileContainer}>
                <FontAwesomeIcon
                  icon={faFileAlt}
                  size={23}
                  color={Colors.PRIMARY}
                />
                <Text style={imageViewStyles.fileText}>
                  FICHA DE SINTOMATOLOGIA
                </Text>
              </TouchableOpacity>
            )}
          </>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={handleShare}
        style={[imageViewStyles.shareButton, {backgroundColor: shareColor}]}>
        <FontAwesomeIcon icon={faShareSquare} size={20} color={Colors.WHITE} />
        <Text style={imageViewStyles.textShareButton}>COMPARTIR</Text>
      </TouchableOpacity>
      <Modal visible={visible} transparent>
        <ImageViewer
          imageUrls={[{url: image}]}
          backgroundColor={Colors.GREY_GRADIEND}
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
  );
};

export default withNavigation(ImageView);
