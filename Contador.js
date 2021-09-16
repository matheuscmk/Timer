import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


export default function Contador(props) {  
    var done = false;
    useEffect(()=>{
      const timer = setInterval(()=>{
          props.setarSegundos(props.segundos-1);
          if(props.segundos <= 0){
            if(props.minutos > 0){
              props.setarMinutos(minutos-1);
              props.setarSegundos(59);
            }else{
              if(!done){
                done = true;
                props.setarEstado('selecionar');
                props.setarMinutos(0);
                props.setarSegundos(1);
                alert("Fim, contador chegou a zero!!");
              }
            }
          }

      },1000)
      return () => clearInterval(timer);

    })

    function resetar() {
      props.setarEstado('leitura');
      props.setarMinutos(0);
      props.setarSegundos(1);
    }
    
    function formatarNumero(number) {
      var finalNumber = "";
      if(number <10){
        finalNumber = "0" + number;
      }else{
        finalNumber = number;
      }
      return finalNumber;
    }
    var segundos = formatarNumero(props.segundos);
    var minutos = formatarNumero(props.minutos);

    return( 
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
            <View style={{flexDirection:'row'}}>
                <Text style={styles.textContador}>{minutos} :</Text>
                <Text style={styles.textContador}>{segundos}</Text>
            </View>

            <TouchableOpacity onPress={()=>resetar()} style={styles.btnIniciar}><Text style={{textAlign:'center', paddingTop:30, color:'black', fontSize:20}}>Resetar</Text></TouchableOpacity>


        </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'rgb(80,50,168)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContador: {
            color:'white',
            fontSize:50
    },
    btnIniciar: {
        backgroundColor:'rgb(250, 241, 65)',
        width:100,
        height:100,
        borderRadius:50,
        marginTop:30,
        borderColor:'white',
        borderWidth:2
      },
})