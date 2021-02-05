import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealDescScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Description Screen!</Text>
      <Button
        title="Go to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
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
