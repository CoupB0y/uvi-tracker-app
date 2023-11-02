import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "./constants/colors";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const BottomTab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary300 },
                    headerTintColor: "white",
                    tabBarStyle: {
                        backgroundColor: Colors.primary300,
                    },
                    tabBarActiveTintColor: Colors.primary400,
                    tabBarInactiveTintColor: "white",
                }}
            >
                <BottomTab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list" color={color} size={size} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="settings"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}

export default App;
