import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export function Dados1(){

    const navigation = useNavigation()

    function NavDados2(){
        navigation.navigate('Dados2',{nome,sobrenome})
    }

    const [nome,setNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.inputs}>
                <View style={styles.input1}>
                    <Text style={styles.textoInput}>Informe seu Nome</Text>
                    <TextInput style={styles.inputResposta} value={nome} onChangeText={text => setNome(text)}/>
                </View>

                <View style={styles.input2}>
                    <Text style={styles.textoInput}>Informe seu Sobrenome</Text>
                    <TextInput style={styles.inputResposta} value={sobrenome} onChangeText={text => setSobrenome(text)}/>
                </View>

              
            </View>

            <TouchableOpacity style={styles.botao} onPress={NavDados2}>
                <Text style = {styles.textoBotao}>Próximo</Text>
            </TouchableOpacity>
            

           

          
        </View>
    );
}