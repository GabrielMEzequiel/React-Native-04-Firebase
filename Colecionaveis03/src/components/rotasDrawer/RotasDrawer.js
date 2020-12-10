import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerPersonalizado from './DrawerPersonalizado';
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import Perfil from '../../views/Perfil/Perfil';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerPersonalizado}
    >

      <Drawer.Screen 
        name="Inicial" 
        component={Inicial}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name='home' size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen 
        name="Alunos" 
        component={Colecao}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="people" size={size} color={color} />
          )
        }}      
      />
      <Drawer.Screen 
        name="Adicionar Aluno" 
        component={Item}
        initialParams={{item: {}, operacao: 'adicionar'}}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="person-add" size={size} color={color} />
          )
        }}      
      />

    </Drawer.Navigator>
  );
}

export default RotasDrawer;