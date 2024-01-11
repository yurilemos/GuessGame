import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponents's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
