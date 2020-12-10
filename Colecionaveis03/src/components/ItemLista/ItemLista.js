import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import estiloItemLista from './estiloItemLista';
import { LinearGradient } from 'expo-linear-gradient';

const ItemLista = ({data, detalhe}) => {

    const [item, setItem] = useState(data);

    return (
        <TouchableOpacity style={estiloItemLista.areaItens} onPress={detalhe}>

            <LinearGradient colors={['#bdbfc0', '#e8eaec', '#e8eaec']}>
                <Text style={estiloItemLista.itemTitulo}> {item.Nome} </Text>
            </LinearGradient>
            <Text style={estiloItemLista.itemSubTitulo}> {item.Sala} ({item.Turma}) </Text>
            
            <LinearGradient colors={['#e8eaec', '#e8eaec', '#bdbfc0']}>
                <Text> </Text>
                {/*
                <Image 
                    resizeMode='contain'
                    style={estiloItemLista.itemFoto}
                    source={item.foto}
                />
                */}
            </LinearGradient>

        </TouchableOpacity>
    );
}

export default ItemLista;