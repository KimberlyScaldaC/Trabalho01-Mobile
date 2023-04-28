
//IMPORTA BIBLIOTECA
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//IMPORTA COISAS DE OUTRAS PASTAS
import Catalogo from './componentes/Filmes';
import stylesApp from './StylesApp/stylesApp';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseUrl = 'https://api.otaviolube.com';
  
  useEffect(function(){
      fetch(baseUrl+'/api/filmes?populate=*')
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })
  }, []);

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={stylesApp.viewTxt}>

          <Text style={stylesApp.txtCartaz}>FILMES EM CARTAZ</Text>

        </View>

        <View style={stylesApp.viewFilmes}>

          {filmes.length > 0 ? filmes.map(filme => <Catalogo filme={filme.attributes} baseUrl={baseUrl}/>) : <Text>Carregando ...</Text>}

        </View>
        <StatusBar style="auto"/>
      </ScrollView>
      
    </SafeAreaView>    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faa8a2',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
