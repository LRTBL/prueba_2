import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {containerGeneral, Colors} from '../../styles';
import {HeaderApp, NotFoundData} from '../../components';
import {adviceItemStyles, imageViewStyles} from '../../styles/components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useQuery} from 'react-query';
import {Image} from 'react-native-elements';
import {getInformation} from '../../api/marketing.api';

import ImageViewer from 'react-native-image-zoom-viewer';

const InfoScreen = ({navigation}) => {
  const {isLoading, data} = useQuery(
    'information',
    async () => await getInformation(),
  );
  const [state, setState] = React.useState({
    visible: false,
    imgSelected: '',
  });
  const {visible, imgSelected} = state;

  const handleShow = (img, pdf) => {
    if (pdf.length === 0 || !pdf) {
      setState({...state, visible: !visible, imgSelected: img});
    } else {
      navigation.navigate('PdfViewScreen', {
        state: {
          file: pdf,
          color: Colors.YELLOW,
        },
      });
    }
  };

  return (
    <View style={containerGeneral.container}>
      <HeaderApp title="Información" navigation={navigation} />
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.YELLOW} size={50} />
        </View>
      ) : (
        <>
          {data.data.length !== 0 ? (
            <ScrollView>
              <View style={containerGeneral.margin}>
                {data.data.map(({image, title, subtitle, pdf}, key) => (
                  <TouchableOpacity
                    key={key}
                    style={adviceItemStyles.container}
                    onPress={() => {
                      handleShow(image, pdf);
                    }}>
                    <Image
                      source={{uri: image}}
                      style={adviceItemStyles.image}
                    />
                    <View
                      style={[
                        adviceItemStyles.textContainer,
                        {backgroundColor: Colors.YELLOW_GRADIEND},
                      ]}>
                      <View style={adviceItemStyles.textSubContainer}>
                        <Text style={adviceItemStyles.title} numberOfLines={1}>
                          {title}
                        </Text>
                        <Text style={adviceItemStyles.text} numberOfLines={1}>
                          {subtitle}
                        </Text>
                      </View>
                      <View style={adviceItemStyles.icon}>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          size={20}
                          color={Colors.WHITE}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          ) : (
            <NotFoundData color={Colors.YELLOW} />
          )}
        </>
      )}
      <Modal visible={visible} transparent>
        <ImageViewer
          imageUrls={[{url: imgSelected}]}
          backgroundColor={Colors.GREY_GRADIEND}
          enableSwipeDown={true}
          onSwipeDown={() => {
            setState({...state, visible: !visible});
          }}
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

export default InfoScreen;
