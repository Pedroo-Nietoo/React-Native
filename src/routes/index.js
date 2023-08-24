import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/auth/Cadastro';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

}