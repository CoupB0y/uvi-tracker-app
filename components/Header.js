import {StyleSheet, View, Text} from "react-native";

function Header({ children}) {
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
        backgroundColor: "blue",
        width: "100%",
        height: "10%",
        marginTop: 0,
    },
    headerText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
});