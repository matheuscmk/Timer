import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  //Teste para o github
  console.disableYellowBox = true;
  const [segundos, setarSegundos] = useState(0);
  const [minutos, setarMinutos] = useState(0);
  const [alarmeSound, setarAlarmeSound] = useState([
    {
      id:1,
      selecionado: true,
      som: 'alarme 1',
      file: 'alarm1.mp3'
    },
    {
      id:2,
      selecionado: false,
      som: 'alarme 2',
      file: 'alarm2.mp3'
    },
    {
      id:3,
      selecionado: false,
      som: 'alarme 3',
      file: 'alarm3.mp3'
    }
  ]);

  var numeros = [];
  for (var i = 0; i <= 60; i++) {
    numeros.push(i);
  }

    function setarAlarme(id) {
     let alarmesTemp = alarmeSound.map(function(val) {
       if(id != val.id)
       val.selecionado = false;
       else
       val.selecionado = true;
       return val;
       
     })
    setarAlarmeSound(alarmesTemp);
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(105, 110, 8,0.8)', 'rgba(234, 242, 80,1)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%'
        }}
      />
      <Text style={{ color: 'black', fontSize: 30 }}>Selecione o seu tempo: </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'red', paddingTop: 15 }}>Min: </Text>
        <Picker
          selectedValue={minutos}
          onValueChange={(itemValue, itemIndex) => setarMinutos(itemValue)}
          style={{ height: 50, width: 100, color: 'red' }}>
          <Picker.Item label='0' value='0' />{
            numeros.map(function (val) {
              return (<Picker.Item label={val.toString()} value={val.toString()} />);
            })
          }
        </Picker>
        <Text style={{ color: 'red', paddingTop: 15 }}>Seg: </Text>
        <Picker
          selectedValue={segundos}
          onValueChange={(itemValue, itemIndex) => setarSegundos(itemValue)}
          style={{ height: 50, width: 100, color: 'red' }}>{
            numeros.map(function (val) {
              return (<Picker.Item label={val.toString()} value={val.toString()} />);
            })
          }
        </Picker>

      </View>
      <View style={{flexDirection:'row'}}>
        {
          alarmeSound.map(function(val) {

if(val.selecionado){
            return(<TouchableOpacity onPress={()=>setarAlarme(val.id)} style={styles.btnEscolherSelecionado}>
              <Text style={{color:'white'}}>{val.som}</Text>
              </TouchableOpacity>
            );
            }else{
              return(<TouchableOpacity onPress={()=>setarAlarme(val.id)} style={styles.btnEscolher}>
                <Text style={{color:'white'}}>{val.som}</Text>
                </TouchableOpacity>
              );
            }
          })
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: 'rgb(250, 241, 65)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnEscolher:{
    marginRight:10,
padding:8,
backgroundColor: 'rgb(136, 143, 7)'
  },
  btnEscolherSelecionado:{
    marginRight:10,
padding:8,
backgroundColor: 'rgba(136, 143, 7,0.3)',
borderColor:'white',
borderWidth:1
  }
});
