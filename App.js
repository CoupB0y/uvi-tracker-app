import * as React from 'react';
import {StyleSheet} from 'react-native';


import HomeScreen from './navigation/screens/HomeScreen';


function App() {
  return (
    <HomeScreen/>
  );
}

export default App;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
});