import { View, StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";

function DetailsScreen() {
    // show graphs and stuff
    return (
        <View style={styles.rootContainer}>
            <View style={styles.textConatiner}>
                <Text style={styles.text}>Lorem Ipsum</Text>
            </View>
            <View style={styles.textConatiner}>
                <Text style={styles.text}> Lorem Ipsum</Text>
            </View>
            <View style={styles.textConatiner}>
                <Text style={styles.text}> Lorem Ipsum</Text>
            </View>
        </View>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textConatiner: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary300,
        width: "90%",
        height: "10%",
        borderRadius: 10,
        margin: 10,
    },
    text: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
});
