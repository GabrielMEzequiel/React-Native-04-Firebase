import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#bdbfc0',
   },
   header: {
      height: 50,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
   },
   texto: {
      fontSize: 20,
      color: '#000000',
      fontWeight: 'bold',
   },

});

  export default estiloColecao;