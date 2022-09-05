import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Home } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <View style={{ marginTop: StatusBar.currentHeight }} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Stack.Screen */}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
