import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaPrincipal from "../Screens/TelaPrincipal/Index";
import { Dados1 } from "../Screens/Dados1";
import { Dados2 } from "../Screens/Dados2/input";
import { TelaFinal } from "../Screens/TelaFinal";




export default function AppRoutes(){

    const {Screen, Navigator} = createNativeStackNavigator();

    return(
        <Navigator initialRouteName="TelaPrincipal" screenOptions={{headerShown: false}}>
            <Screen name="TelaPrincipal" component={TelaPrincipal}/>
            <Screen name="Dados1" component={Dados1}/>
            <Screen name="Dados2" component={Dados2}/>
            <Screen name="TelaFinal" component={TelaFinal}/>
        </Navigator>
    )
}