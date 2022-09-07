import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StatusBar as ReactNativeStatusBar } from "react-native";
import { View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Home } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        {/* Apply this line when Expo Status Bar doesn't work */}
        {/* <View style={{ marginTop: ReactNativeStatusBar.currentHeight }} /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Stack.Screen */}
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        <StatusBar style="auto" hidden />
      </TailwindProvider>
    </NavigationContainer>
  );
}
