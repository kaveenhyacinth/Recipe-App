import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.MealItem}>
      <Pressable onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.row, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.mealDetails }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  MealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginVertical: 10,
    elevation: 3,
    borderRadius: 10,
    overflow: "hidden"
  },
  row: {
    flexDirection: "row",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
});

export default MealItem;
