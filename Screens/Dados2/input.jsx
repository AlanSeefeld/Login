import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";


export function Dados2(){

    const navigation = useNavigation()

    function voltar(){
        navigation.goBack()
    }

    function NavTelaFinal(){
        navigation.navigate("TelaFinal",{nome,sobrenome,cpf,rg})
    }

    
    const [cpf,setCpf] = useState('')
    const [rg,setRg] = useState('')

    const route = useRoute();
    const { nome, sobrenome } = route.params;


    return(
        <View style={styles.container}>
            <View style={styles.inputs}>
                <View style={styles.input1}>
                    <Text style={styles.textoInput}>Informe seu CPF</Text>
                    <TextInput style={styles.inputResposta} value={cpf} onChangeText={text => setCpf(text)}/>
                </View>

                <View style={styles.input2}>
                    <Text style={styles.textoInput}>Informe seu RG</Text>
                    <TextInput style={styles.inputResposta} value={rg} onChangeText={text => setRg(text)}/>
                </View>

              
            </View>

            <View style={styles.botoes}>
            <TouchableOpacity style={[styles.botao,{backgroundColor:"#860929"}]} onPress={voltar}>
                <Text style = {styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.botao} >
                <Text style = {styles.textoBotao} onPress={NavTelaFinal}>Próximo</Text>
            </TouchableOpacity>

            </View>
            
            

           

          
        </View>
    );
}