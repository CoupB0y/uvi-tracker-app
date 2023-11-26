import { Modal, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function ConnectionsModal(props) {
    
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.rootContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Scan Devices</PrimaryButton>
                    <PrimaryButton onPress={props.onCancel}>Close</PrimaryButton>
                </View>
            </View>
        </Modal>
    );
}

export default ConnectionsModal;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        margin: 20,
    },
});
