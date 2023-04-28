import { Text, View } from "react-native";
import { Image } from "react-native";
import styles from "./styles";


export default function Catalogo(promp){ 

    const urlImagem = promp.filme.attributes.poste.data.attributes.formats.url;

 return(
        <View style={styles.blocoPrincipal}>

            console.log(baseUrl);
                
                <View style={styles.viewImagem}>
                    <Image style={styles.Imagem} source={{uri: baseUrl+urlImagem}}/>
                </View>
                <View style={styles.viewInformacoes}>
                    <Text style={styles.textoTitulo}>Nome: {promp.filme.attributes.titulo}</Text>
                    <Text style={styles.textoDescricao}>Sinopse: {promp.filme.attributes.sinopse}</Text>
                </View>

        </View>



    )
}