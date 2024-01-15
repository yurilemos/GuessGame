import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumer] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumer(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  function handleSafeAreaView() {
    if (Platform.OS === "android") {
      return (
        <SafeAreaViewAndroid style={styles.rootScreen}>
          {screen}
        </SafeAreaViewAndroid>
      );
    }

    return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
  }

  return (
    <LinearGradient
      colors={[Colors.primary900, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {handleSafeAreaView()}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
