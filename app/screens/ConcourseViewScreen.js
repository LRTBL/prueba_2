import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {containerGeneral, Colors} from '../styles';
import {imageViewStyles} from '../styles/components';
import {HeaderApp} from '../components';
import ImageViewer from 'react-native-image-zoom-viewer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBook, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {useQuery} from 'react-query';
import {dateformatComplete} from '../utils/formatDate';
import {getEventById} from '../api/rrhh.api';
import {getConcourseById} from '../api/improvement.api';

const ConcourseViewScreen = ({navigation}) => {
  const {id, color, titleColor, type} = navigation.getParam('state');
  const {isLoading, data} = useQuery(['eventId', id], async () =>
    type === 'rrhh' ? await getEventById(id) : await getConcourseById(id),
  );

  const [visible, setVisible] = React.useState(false);
  const navigateTo = () => {
    navigation.navigate('PdfParticipateScreen', {
      state: {
        onlyView: data.event.estado === 'TER',
        file: data.event.bases,
        color: color,
      },
    });
  };
  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" title="Concurso" />
      {isLoading ? (
        <View style={containerGeneral.indicator}>
          <ActivityIndicator color={Colors.PRIMARY} size={50} />
        </View>
      ) : (
        <>
          <ScrollView>
            <View
              style={{
                marginLeft: 50,
                marginRight: 50,
                marginTop: 20,
                marginBottom: 50,
              }}>
              <Text
                style={{
                  color: titleColor,
                  fontSize: 18,
                  fontFamily: 'AktivGroteskCorp-Bold',
                  textAlign: 'center',
                }}>
                {data.event.title}
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 14,
                  fontFamily: 'AktivGroteskCorp-Light',
                }}>
                {data.event.content}
              </Text>
              <View style={{marginTop: 20, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    width: '35%',
                    fontFamily: 'AktivGroteskCorp-Bold',
                  }}>
                  Dirigida a:
                </Text>
                <Text
                  style={{fontSize: 16, fontFamily: 'AktivGroteskCorp-Light'}}>
                  {data.event.dirigido}
                </Text>
              </View>
              <View style={{marginTop: 20, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    width: '35%',
                    fontFamily: 'AktivGroteskCorp-Bold',
                  }}>
                  Fecha:
                </Text>
                <Text
                  style={{fontSize: 16, fontFamily: 'AktivGroteskCorp-Light'}}>
                  {dateformatComplete(new Date(data.event.fecha), true)}
                </Text>
              </View>
              <View style={{marginTop: 20, flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    width: '35%',
                    fontFamily: 'AktivGroteskCorp-Bold',
                  }}>
                  Duración:
                </Text>
                <Text
                  style={{fontSize: 16, fontFamily: 'AktivGroteskCorp-Light'}}>
                  {`${Math.trunc(
                    data.event.duration / 7,
                  )} semanas con ${Math.trunc(data.event.duration % 7)} dias`}
                </Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'AktivGroteskCorp-Bold',
                  fontSize: 16,
                  marginTop: 40,
                }}>
                {type !== 'rrhh' && data.event.estado === 'TER'
                  ? 'Ganadores'
                  : 'Premios'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setVisible(!visible);
                }}
                style={{marginTop: 20}}>
                <Image
                  style={{width: '100%', resizeMode: 'contain', height: 280}}
                  source={{
                    uri:
                      type !== 'rrhh' && data.event.estado === 'TER'
                        ? data.event.image_winer
                        : data.event.image_premio,
                  }}
                />
              </TouchableOpacity>
              {data.event.estado === 'TER' && (
                <View
                  style={{
                    backgroundColor: '#fad6d9',
                    padding: 10,
                    borderRadius: 5,
                    marginTop: 40,
                  }}>
                  <Text
                    style={{
                      color: Colors.SECONDARY,
                      textAlign: 'center',
                      fontFamily: 'AktivGroteskCorp-Bold',
                      fontSize: 15,
                    }}>
                    {`Este concurso culminó el ${dateformatComplete(
                      new Date(data.event.fecha_termino),
                      true,
                    )} de ${new Date(data.event.fecha_termino).getFullYear()}`}
                  </Text>
                </View>
              )}
            </View>
          </ScrollView>
          <Modal visible={visible} transparent>
            <ImageViewer
              imageUrls={[
                {
                  url:
                    type !== 'rrhh' && data.event.estado === 'TER'
                      ? data.event.image_winer
                      : data.event.image_premio,
                },
              ]}
              backgroundColor={Colors.GREY_GRADIEND}
              onSwipeDown={() => {
                setVisible(!visible);
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
          {data.event.estado === 'ACT' ? (
            <View style={{flexDirection: 'row', height: 60}}>
              <TouchableOpacity
                onPress={navigateTo}
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  backgroundColor: Colors.PRIMARY,
                }}>
                <FontAwesomeIcon icon={faBook} size={20} color={Colors.WHITE} />
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 16,
                    color: Colors.WHITE,
                    marginLeft: 15,
                    fontFamily: 'AktivGroteskCorp-Medium',
                  }}>
                  VER BASES
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  backgroundColor: color,
                }}>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  size={20}
                  color={Colors.WHITE}
                />
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 16,
                    color: Colors.WHITE,
                    marginLeft: 15,
                    fontFamily: 'AktivGroteskCorp-Medium',
                  }}>
                  PARTICIPAR
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              {type === 'rrhh' ? (
                <TouchableOpacity
                  onPress={navigateTo}
                  style={{
                    width: '100%',
                    backgroundColor: titleColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 60,
                  }}>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size={20}
                    color={Colors.WHITE}
                  />
                  <Text
                    style={{
                      fontWeight: '800',
                      fontSize: 16,
                      color: Colors.WHITE,
                      marginLeft: 15,
                      fontFamily: 'AktivGroteskCorp-Medium',
                    }}>
                    VER GANADORES
                  </Text>
                </TouchableOpacity>
              ) : (
                <>
                  {data.event.projects !== '' && (
                    <TouchableOpacity
                      onPress={navigateTo}
                      style={{
                        width: '100%',
                        backgroundColor: color,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <FontAwesomeIcon
                        icon={faBook}
                        size={20}
                        color={Colors.WHITE}
                      />
                      <Text
                        style={{
                          fontWeight: '800',
                          fontSize: 16,
                          color: Colors.WHITE,
                          marginLeft: 15,
                          fontFamily: 'AktivGroteskCorp-Medium',
                        }}>
                        VER LOS PROYECTOS A IMPLEMENTAR
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </View>
  );
};

export default ConcourseViewScreen;
