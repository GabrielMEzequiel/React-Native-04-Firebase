import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {  

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>
            
                <TouchableOpacity onPress={abrirColecao}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/alunos.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Alunos</Text>                    
                    </ImageBackground>
                </TouchableOpacity>
           
                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/aluno.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Add Aluno</Text>                    
                    </ImageBackground>
                </TouchableOpacity>
            
        </View>
    )
}

export default Inicial;
