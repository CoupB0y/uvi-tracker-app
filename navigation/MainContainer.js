import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let routeName = route.name;

                        if (routeName === homeName) {
                            iconName = focused ? "home" : "home-outline";
                        } else if (routeName === detailsName) {
                            iconName = focused ? "list" : "list-outline";
                        } else if (routeName === settingsName) {
                            iconName = focused
                                ? "settings"
                                : "settings-outline";
                        }

                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "#990f0f",
                    tabBarInactiveTintColor: "#ffffff",
                    tabBarLabelStyle: {
                        textAlignVertical: 'center',
                        fontSize: 10,
                    },
                    headerTintColor: "#ffffff",
                    headerStyle: {
                        backgroundColor: "#333333"
                    },
                    tabBarStyle: [
                        {
                            display: "flex",
                            position: "absolute",
                            backgroundColor: "#333333",
                        },
                        null,
                    ],
                })}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={detailsName} component={DetailsScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;
