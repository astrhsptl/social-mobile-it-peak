import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "../screens/CategoryScreen";
import HomeScreen from "../screens/HomeScreen";
import PointDetailScreen from "../screens/PointDetailScreen";

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'HomeScreen'} component={HomeScreen} options={{title: 'Home'}} />
                <Stack.Screen name={'CategoryScreen'} component={CategoryScreen} options={{title: 'Category'}} />
                <Stack.Screen name={'PointDetailScreen'} component={PointDetailScreen} options={{title: 'Post detail'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}