import {useEffect, useState} from "react";
import { View, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import 

function HomeScreen() {
    // display current uv index and connect device button
    
    const [curUVIndex, setCurUVIndex] = useState(2);
    const [uvColor, setUVColor] = useState("white");    

    const getUVIndexColor = (index)  => { // determines the color of the uv display 
        if (index >= 0 && index <= 2) {
          return 'green';
        } else if (index >= 3 && index <= 5) {
          return 'yellow';
        } else if (index >= 6 && index <= 7) {
          return 'orange';
        } else if (index >= 8 && index <= 10) {
          return 'red';
        } else {
          return 'purple';
        }
      };

    return (
        <View style={styles.rootContainer}>
            <View style={[styles.uvConatiner, {backgroundColor: getUVIndexColor(curUVIndex)}]}>
                <Text style={styles.uvText}>UV Index: {curUVIndex}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Connect Device</PrimaryButton>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    uvConatiner: {
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "10%",
        borderRadius: 10,
    },
    uvText: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        textShadowColor: 'black', textShadowRadius: 2, textShadowOffset: { 
            width: 1,
            height: 1
          }
    },
    buttonContainer: {
        margin: 20,
    },
});
