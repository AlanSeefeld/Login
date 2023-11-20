import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function TelaFinal(){

    const route = useRoute()
    const {nome,sobrenome,cpf,rg} = route.params

    const navigation = useNavigation()

    function voltar(){
        navigation.goBack()
    }

    function NavTelaInicial(){
        Alert.alert("Usuario cadastrado com sucesso!")
        navigation.navigate("TelaPrincipal")
    }



    return(
        <View style={styles.container}>
            <View style={styles.dados}>
                <Text style={styles.textoInicial}>Olá, {nome} {sobrenome}</Text>

                <Text style={styles.textoInicial}>Portador do documento</Text>

                <Text style={styles.textoGrande}>CPF</Text>
                <Text style={styles.textoPqn}>{cpf}</Text>

                <Text style={styles.textoGrande}>RG</Text>
                <Text style={styles.textoPqn}>{rg}</Text>
            </View>

            <View style={styles.botoes}>
            <TouchableOpacity style={[styles.botao,{backgroundColor:"#860929"}]} onPress={voltar}>
                <Text style = {styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.botao} >
                <Text style = {styles.textoBotao} onPress={NavTelaInicial}>Finalizar</Text>
            </TouchableOpacity>

            </View>
            

        </View>
    )
}