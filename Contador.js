import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';


export default function Contador(props) {  

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
                <Text style={styles.textContador}>{props.minutos} :</Text>
                <Text style={styles.textContador}>{props.segundos}</Text>
            </View>

            <TouchableOpacity onPress={()=>props.setarEstado('selecionar')} style={styles.btnIniciar}><Text style={{textAlign:'center', paddingTop:30, color:'black', fontSize:20}}>Resetar</Text></TouchableOpacity>


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