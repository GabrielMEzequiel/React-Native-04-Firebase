import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#e8eaec',   
   },
   header: {   
      height: 50,  
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
   },
   formularioContainer: {
       flex: 1,
       justifyContent: 'center',
   },
   texto: {
      fontSize: 20,
      color: '#000000',
      fontWeight: 'bold',
   },
   campoContainer: {
      flexDirection: 'row',    
      padding: 10,
      paddingLeft: 50,
      paddingRight: 50,
      margin: 10,
      marginRight: 50,
      alignItems: 'center',
   },
   campo: {
      width: '100%',
      fontSize: 18,
      color: '#384B59',
      marginLeft: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: '#384B59',
   },
   botoesContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 50,
   },
   botaoContainer: {    
      backgroundColor: '#384B59',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginLeft: 50,
      marginRight: 50,
      height: 50,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 8,
    },
});

export default estiloItem;