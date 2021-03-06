import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Colors, containerGeneral} from '../../../styles';
import {markStyles} from '../../../styles/screens';
import {MarkItem} from '../../../components/rrhh';

const data = {
  date: 'JUEVES 21 DE ENERO',
  marks: [
    {type: 'FNR', title: 'Hora de ingreso', hour: '9:00 a.m.'},
    {type: 'T', title: 'Ingreso asasdasd', hour: '10:00 a.m.'},
    {type: 'P', title: 'Inicio almuerzo', hour: '12:00 a.m.'},
    {type: 'LSG', title: 'Término almuerzo', hour: '1:00 p.m.'},
    {type: 'DM', title: 'Hora de salida', hour: '8:00 p.m.'},
  ],
};

const AttendanceMarkScreen = () => {
  const {date, marks} = data;
  return (
    <View style={containerGeneral.container}>
      <ScrollView>
        <View style={containerGeneral.margin}>
          <View style={markStyles.containerContent}>
            <Text style={markStyles.topTitle}>
              Recuerda que la marcación que visualizas corresponde al dia
              anterior
            </Text>
            <View style={markStyles.containerDate}>
              <Text style={markStyles.textDate}>{date}</Text>
            </View>
            {marks.map((item, key) => (
              <MarkItem key={key} {...item} />
            ))}
          </View>
          <View style={markStyles.containerMessage}>
            <Text style={markStyles.textMessage}>
              Si tienes alguna observación, comunícate con tu Administrador o
              Jefe Inmediato
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={markStyles.containerBottom}>
        <Text style={markStyles.status}>ESTATUS</Text>
        <View style={markStyles.lineStatus}>
          <View
            style={[markStyles.colorStatus, {backgroundColor: Colors.GREEN}]}
          />
          <Text style={markStyles.textStatus}>
            Puntual(P), Falta Reportada(FR), Permiso(PE), Descanzo médico(DM)
          </Text>
        </View>
        <View style={markStyles.lineStatus}>
          <View
            style={[
              markStyles.colorStatus,
              {backgroundColor: Colors.SECONDARY},
            ]}
          />
          <Text style={markStyles.textStatus}>
            Tardanza(T), Falta No Reportada(FNR),Suspención(S)
          </Text>
        </View>
        <View style={markStyles.lineStatus}>
          <View
            style={[markStyles.colorStatus, {backgroundColor: Colors.BLUE}]}
          />
          <Text style={markStyles.textStatus}>
            Licencia sin goce(LSG), Licencia con goce(LCG)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AttendanceMarkScreen;

// const MarkItem = ({title, type, hour}) => {
//   const typesObj = {
//     status1: {types: ['P', 'FR', 'PE', 'DM'], color: Colors.GREEN},
//     status2: {types: ['T', 'FNR', 'S'], color: Colors.SECONDARY},
//     status3: {types: ['LSG', 'LCG'], color: Colors.BLUE},
//   };

//   let colorItem = null;
//   Object.values(typesObj).forEach(
//     ({types, color}) => types.includes(type) && (colorItem = color),
//   );

//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         borderWidth: 1,
//         marginBottom: 7,
//         borderRadius: 8,
//         borderColor: colorItem,
//       }}>
//       <View
//         style={{
//           backgroundColor: colorItem,
//           paddingTop: 10,
//           paddingBottom: 10,
//           alignItems: 'center',
//           borderTopLeftRadius: 6,
//           borderBottomLeftRadius: 6,
//           width: 45,
//         }}>
//         <Text
//           style={{
//             color: Colors.WHITE,
//             fontFamily: 'AktivGroteskCorp-Bold',
//             fontSize: 17,
//           }}>
//           {type}
//         </Text>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           paddingLeft: 20,
//           alignItems: 'center',
//           width: '75%',
//         }}>
//         <Text
//           style={{
//             color: colorItem,
//             fontFamily: 'AktivGroteskCorp-Bold',
//             fontSize: 12,
//             textTransform: 'uppercase',
//           }}>
//           {title}
//         </Text>
//         <Text
//           style={{
//             color: colorItem,
//             fontFamily: 'AktivGroteskCorp-Light',
//             fontSize: 12,
//           }}>
//           {hour}
//         </Text>
//       </View>
//     </View>
//   );
// };
