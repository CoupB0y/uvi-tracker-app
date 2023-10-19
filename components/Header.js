import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

function Header({ children }) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}> {children}</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "10%",
    },
    headerText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
});
