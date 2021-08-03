import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default function App() {

  console.disableYellowBox = true;
  const [segundos, setarSegundos] = useState(0);
  const [minutos, setarMinutos] = useState(0);
  const [alarmeSound, setarAlarmeSound] = useState([
    {
      selecionado: true,
      som: 'alarme 1',
      file: 'alarm1.mp3'
    },
    {
      selecionado: false,
      som: 'alarme 2',
      file: 'alarm2.mp3'
    }
  ]);

  var numeros = [];
  for (var i = 0; i <= 60; i++) {
    numeros.push(i);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black', fontSize: 30 }}>Selecione o seu tempo: </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{color:'red'}}>Min: </Text>
        <Picker
        selectedValue={minutos}
        onValueChange={(itemValue, itemIndex) => setarMinutos(itemValue)}
        style={{ height: 50, width: 100, color:'red' }}>
        <Picker.Item label='0' value='0' />{
          numeros.map(function (val) {
            return (<Picker.Item label={val.toString()} value={val.toString()} />);
          })
        }
        </Picker>
        <Text style={{color:'red'}}>Seg: </Text>
        <Picker 
         selectedValue={segundos}
         onValueChange={(itemValue, itemIndex) => setarSegundos(itemValue)}
        style={{ height: 50, width: 100, color:'red' }}>{
          numeros.map(function (val) {
            return (<Picker.Item label={val.toString()} value={val.toString()} />);
          })
        }
        </Picker>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 241, 65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
