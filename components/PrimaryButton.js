import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}
                android_ripple={{ color: "#fff" }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        height: 75,
        width: 150,
        borderRadius: 10,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary300,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        overflow: "hidden",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
