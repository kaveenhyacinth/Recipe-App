import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDescScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Description Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDescScreen;
