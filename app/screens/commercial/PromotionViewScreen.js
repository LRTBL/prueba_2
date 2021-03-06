import React from 'react';
import HeaderApp from '../../components/HeaderApp';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {containerGeneral, Colors} from '../../styles';
import {promotionViewStyles} from '../../styles/screens';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {PromotionEstablishmentItem} from '../../components/commercial';
import {Modal, NotFoundData} from '../../components';
import {getPromotionsById} from '../../api/marketing.api';
import {useQuery} from 'react-query';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

const PromocionViewScreen = ({navigation}) => {
  const {dimensions, id, type, legal, imagePromotion} = navigation.getParam(
    'state',
  );

  const {isLoading, data} = useQuery(
    ['promotions', id],
    async () => await getPromotionsById(id),
  );

  const [visible, setVisible] = React.useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <View style={containerGeneral.container}>
      <HeaderApp
        title="Disponibilidad"
        navigation={navigation}
        type="secondary"
      />
      <ScrollView>
        <View style={promotionViewStyles.container}>
          <Image
            source={{uri: imagePromotion}}
            style={{width: dimensions.width, height: dimensions.height}}
          />
        </View>
        {type === 'ecommerce' ? (
          <View style={promotionViewStyles.ecommerceLegal}>
            <Text style={promotionViewStyles.ecommerceTitle}>
              LEGALES DE CAMPAÑA
            </Text>
            <Text style={promotionViewStyles.ecommerceText}>{legal}</Text>
          </View>
        ) : (
          <>
            <Text style={promotionViewStyles.text}>
              Validos solo en las siguientes tiendas:
            </Text>
            {isLoading ? (
              <View style={promotionViewStyles.containerValidate}>
                <ActivityIndicator color={Colors.YELLOW} size={50} />
              </View>
            ) : (
              <>
                {data.validEstablishments.length !== 0 ? (
                  <View style={promotionViewStyles.itemContainer}>
                    {data.validEstablishments.map(
                      ({horario, tienda, direccioncomercial}, key) => {
                        return (
                          <PromotionEstablishmentItem
                            key={key}
                            local={tienda}
                            direction={direccioncomercial}
                            hour={horario}
                          />
                        );
                      },
                    )}
                  </View>
                ) : (
                  <View style={promotionViewStyles.containerValidate}>
                    <NotFoundData color={Colors.YELLOW} />
                  </View>
                )}
              </>
            )}
          </>
        )}
      </ScrollView>
      <Modal visible={visible} toggleModal={toggleModal}>
        <View style={promotionViewStyles.modalContainer}>
          <Text style={promotionViewStyles.modalTitle}>
            LEGALES DE LA CAMPAÑA
          </Text>
          <Text style={promotionViewStyles.modalText}>
            {data && data.legal}
          </Text>
        </View>
      </Modal>
      {type !== 'ecommerce' && !isLoading && (
        <TouchableOpacity
          onPress={toggleModal}
          style={promotionViewStyles.btnLegal}>
          <FontAwesomeIcon icon={faBook} size={20} color={Colors.WHITE} />
          <Text style={promotionViewStyles.btnTextLegal}>
            VER LEGALES DE CAMPAÑA
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PromocionViewScreen;
