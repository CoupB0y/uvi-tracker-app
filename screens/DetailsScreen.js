import * as React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Header from "../components/Header";
import Colors from "../constants/colors";


function DetailsScreen() {
    return (
        <View style={styles.rootContainer}>
            <Header>UVI Data</Header>
            <View style={styles.uvConatiner}>
                <FlatList> <Text> Test </Text></FlatList>
            </View>
        </View>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    uvConatiner: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary300,
        width: "50%",
        height: "10%",
        borderRadius: 10,
    },
    uvText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
});
