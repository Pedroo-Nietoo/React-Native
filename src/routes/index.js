import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/auth/Cadastro';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import User from '../pages/home/User';

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

}