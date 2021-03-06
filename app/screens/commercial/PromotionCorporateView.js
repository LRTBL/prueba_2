import React from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {Colors, containerGeneral} from '../../styles';
import {promotionCorporateStyles} from '../../styles/screens';
import {Modal, NotFoundData} from '../../components';
import {PromotionItemCorporate} from '../../components/commercial';
import {useQuery} from 'react-query';
import {getPromotionsCorporatives} from '../../api/marketing.api';

const PromotionCorporateView = () => {
  const {isLoading, data} = useQuery(
    'promCorporatives',
    async () => await getPromotionsCorporatives(),
  );

  const [state, setState] = React.useState({
    visible: false,
    legalText: '',
    legalTitle: '',
  });

  const toggleModal = (legal, title) => {
    setState({
      ...state,
      visible: !state.visible,
      legalText: legal,
      legalTitle: title,
    });
  };

  return (
    <>
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.YELLOW} size={50} />
        </View>
      ) : (
        <>
          {data.alianzas.length !== 0 ? (
            <ScrollView>
              <View style={promotionCorporateStyles.container}>
                <Text style={promotionCorporateStyles.title}>
                  Alianzas Comerciales Vigentes
                </Text>
                {data.alianzas.map((item, key) => (
                  <PromotionItemCorporate
                    key={key}
                    {...item}
                    toggleModal={toggleModal}
                  />
                ))}
              </View>
              <Modal visible={state.visible} toggleModal={toggleModal}>
                <View style={promotionCorporateStyles.modalContainer}>
                  <Text style={promotionCorporateStyles.modalTitle}>
                    LEGALES DE LA CAMPAÑA
                  </Text>
                  <Text style={promotionCorporateStyles.modalSubtitle}>
                    {state.legalTitle}
                  </Text>
                  <Text style={promotionCorporateStyles.modalLegal}>
                    {state.legalText}
                  </Text>
                </View>
              </Modal>
            </ScrollView>
          ) : (
            <NotFoundData color={Colors.YELLOW} />
          )}
        </>
      )}
    </>
  );
};

export default PromotionCorporateView;
