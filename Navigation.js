import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const POLO_BLUE_COLOR = "rgb(51,60,87)";

class Navigation extends React.Component {
  render() {
    return (
      <View style={{ flex: 0.75, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, marginLeft: 80 }}>
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={35}
            color="black"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Ionicons
            name="md-add-circle-outline"
            size={35}
            color={POLO_BLUE_COLOR}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Feather name="user" size={35} color="black" />
        </View>
      </View>
    );
  }
}

export default Navigation;
