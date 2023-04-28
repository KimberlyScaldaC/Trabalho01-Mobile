import { Button, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import styles from "./styles";


export default function Catalogo({filme, baseUrl}){ 


    return(
        <View style={styles.blocoPrincipal}>
            <View style={styles.viewBloco}>
                <View style={styles.viewImagem}>
                    <Image style={styles.Imagem} source={{uri: baseUrl + filme.poster.data.attributes.url}}/>
                </View>
                <View style={styles.viewInformacoes}>
                    <Text style={styles.textoTitulo}>{filme.titulo}</Text>
                    <Text style={styles.textoDescricao}>Sinopse: {filme.sinopse}</Text>
                    <Button title="Comprar Ingresso" style={styles.botao}/>
                </View>
            </View>
        </View>



    )
}






/*
<Image style={styles.Imagem} source={{uri: promp.filme.poster.data.attributes.}}/>
*/