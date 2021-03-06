import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Share,
  Platform,
  PermissionsAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';
import PDFView from 'react-native-view-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import {containerGeneral, Colors} from '../styles';
import {pdfViewStyles} from '../styles/screens';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDownload, faShareSquare} from '@fortawesome/free-solid-svg-icons';

const PdfViewer = ({file, btnColor}) => {
  const [state, setState] = React.useState({
    error: false,
    load: true,
    download: false,
  });
  const historyDownload = () => {
    setState({...state, download: true});
    if (Platform.OS === 'ios') {
      this.downloadHistory();
    } else {
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Usted no cuenta con permisos suficientes',
            message:
              'Tiene que aceptar los permisos de acceso a archivos de su dispositivo para poder descargar el PDF',
          },
        ).then((granted) => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage Permission Granted.');
            downloadHistory();
          } else {
            setState({...state, download: false});
            Alert.alert(
              'Permisos de acceso a archivos del dispositivo denegado',
            );
          }
        });
      } catch (err) {
        setState({...state, download: false});
        Alert.alert(
          'Ocurrio un error al acceder a los permisos del dispositivo',
        );
        console.log('error');
      }
    }
  };

  const downloadHistory = async () => {
    let PictureDir = RNFetchBlob.fs.dirs.PictureDir;
    const date = new Date();
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/footloose_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          '.pdf',
        description: 'PDF Footloose',
      },
    };
    RNFetchBlob.config(options)
      .fetch('GET', file)
      .then((res) => {
        setState({...state, download: false});
        Alert.alert('El PDF se descargo exitosamente');
        console.log('res -> ', JSON.stringify(res));
      })
      .catch((err) => {
        setState({...state, download: false});
        Alert.alert('Ocurrio un error al descargar el PDF');
        console.log(err);
      });
  };

  const handleShare = () => {
    Share.share(
      {
        message: `¡Hola! Te comparto esta publicacion de la aplicación de Footloose Colaboradores: 
        ${file}`,
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
    <View style={containerGeneral.container}>
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
            <ActivityIndicator size={30} color={btnColor} />
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

      {!state.error && !state.load && (
        <View style={pdfViewStyles.containerButtons}>
          <TouchableOpacity
            style={pdfViewStyles.shareButton}
            disabled={state.download}
            onPress={historyDownload}>
            {state.download ? (
              <ActivityIndicator color={btnColor} size={20} />
            ) : (
              <>
                <FontAwesomeIcon icon={faDownload} size={20} color={btnColor} />
                <Text style={[pdfViewStyles.shareText, {color: btnColor}]}>
                  DESCARGAR
                </Text>
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleShare}
            style={[pdfViewStyles.downloadButton, {backgroundColor: btnColor}]}>
            <FontAwesomeIcon
              icon={faShareSquare}
              size={20}
              color={Colors.WHITE}
            />
            <Text style={pdfViewStyles.downloadText}>COMPARTIR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PdfViewer;
