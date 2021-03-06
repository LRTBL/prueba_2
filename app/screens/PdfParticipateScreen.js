import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {containerGeneral, Colors} from '../styles';
import {pdfViewStyles} from '../styles/screens';
import {HeaderApp} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import PDFView from 'react-native-view-pdf';

const PdfParticipateScreen = ({navigation}) => {
  const [state, setState] = React.useState({error: false, load: true});
  const {file, color, onlyView} = navigation.getParam('state');

  // const handleJoin = () => {};

  return (
    <View style={containerGeneral.container}>
      <HeaderApp navigation={navigation} type="secondary" />
      <View style={pdfViewStyles.container}>
        <PDFView
          fadeInDuration={250.0}
          style={pdfViewStyles.pdfView}
          resource={file}
          resourceType={'url'}
          onLoad={() => setState({...state, load: false})}
          onError={(error) => setState({...state, error: true, load: false})}
        />
        {state.load && (
          <View style={pdfViewStyles.validationContainer}>
            <ActivityIndicator size={30} color={color} />
          </View>
        )}

        {state.error && (
          <View style={pdfViewStyles.validationContainer}>
            <Text style={pdfViewStyles.validationError}>
              Error al cargar el PDF :c
            </Text>
          </View>
        )}
      </View>

      {!state.error && onlyView && (
        <View style={pdfViewStyles.containerButtons}>
          <TouchableOpacity
            style={[
              pdfViewStyles.participateButton,
              {
                backgroundColor: color,
              },
            ]}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size={20}
              color={Colors.WHITE}
            />
            <Text style={pdfViewStyles.participateText}>PARTICIPAR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PdfParticipateScreen;
