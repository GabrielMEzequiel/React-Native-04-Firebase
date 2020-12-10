import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LivroFB } from '../../firebase/livroFB';

function Item({ navigation, route }) {

    const [item, setItem] = useState({});
    const {operacao, setOperacao} = route.params;

    const livroFb = new LivroFB();

    useEffect(() => {
            setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Colecao')
    }

    const salvar = (item) => {
        operacao == 'adicionar' ? livroFb.adicionarLivro(item) : livroFb.editarLivro(item);
        voltar();
    }

    const remover = (item) => {
        livroFb.removerLivro(item);
        voltar();
    }
    
    return (
        <View style={estiloItem.container}>

            <View style={estiloItem.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="Black" />
                </TouchableOpacity>
                <Text style={estiloItem.texto}>Adicionar Aluno</Text>
                <Text></Text>
            </View>

            <View style={estiloItem.formularioContainer}>

                <View style={estiloItem.campoContainer}>
                    <MaterialIcons name="person" size={24} color="#384B59" />
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Nome"                      
                        onChangeText={Nome => setItem({...item, Nome})}
                        value={item.Nome}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                    <MaterialIcons name="school" size={24} color="#384B59" />
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Sala"                       
                        onChangeText={Sala => setItem({...item, Sala})}
                        value={item.Sala}
                    />
                </View>

                <View style={estiloItem.campoContainer}>
                        <MaterialCommunityIcons name="google-classroom" size={24} color="#384B59" />
                        <TextInput
                            style={estiloItem.campo}
                            placeholder="Turma"                    
                            onChangeText={Turma => setItem({...item, Turma})}
                            value={item.Turma}
                        />
                </View>

                <View style={estiloItem.botoesContainer}>
                    
                    <TouchableOpacity onPress={() => salvar(item)} style={estiloItem.botaoContainer}>                      
                            <MaterialIcons name="save" size={24} color="white" />                             
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(item)} style={estiloItem.botaoContainer}>                        
                            <MaterialIcons name="delete" size={24} color="white" />                                 
                    </TouchableOpacity>

                </View>

            </View>

        </View>
    )
}

export default Item;
