import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

class Header extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.back}>
          <Ionicons name="md-arrow-back" size={35} color="black" />
        </View>
        <View style={styles.dot}>
          <Entypo name="grid" size={35} color="black" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  dot: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
export default Header;
