import {  Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";



export default function TelaPrincipal(){

    const navigation = useNavigation()

function NavDados1(){
    navigation.navigate('Dados1')
}

    return(
        <View style = {styles.container}>
            <View style={styles.VwTextoInicial}>
                <Text style={styles.texto}>UNIPAR</Text>
            </View>
            

            <TouchableOpacity style={styles.botao} onPress={NavDados1}>
                <Text style = {styles.textoBotao}>INICIAR</Text>
            </TouchableOpacity>
        </View>
    )
}

