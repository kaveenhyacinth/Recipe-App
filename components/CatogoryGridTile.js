import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.gridItem]}
      onPress={props.onSelect}
    >
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 24,
    textAlign: "right",
  },
});

export default CategoryGridTile;
