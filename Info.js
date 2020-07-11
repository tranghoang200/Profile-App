import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

const followAlert = () =>
    Alert.alert(
      "Followed",
      "You followed",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

const sendAlert = () =>
    Alert.alert(
      "Sent",
      "message sended",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

class Info extends React.Component {
    
  render() {
    return (
      <View style={styles.info}>
        <View style={styles.avatar}>
          <Image
            style={styles.imgAvatar}
            source={require("./assets/avatar.jpg")}
          />
        </View>
        <View style={styles.userDetail}>
          <View style={styles.fullName}>
            <Text style={styles.textFullName}>Hoang Thi Ha Trang</Text>
          </View>
          <View style={styles.jobTitle}>
            <Text style={styles.textJobTitle}>Developer</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              title={"Follow Alert"}
              onPress={followAlert}
              style={styles.follow}
            >
              <Text
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
              >
                Follow
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              title={"Send Alert"}
              onPress={sendAlert}
              style={styles.send}
            >
              <Ionicons name="md-send" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    info: {
        flex: 2,
        flexDirection: "row",
      },
      avatar: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      },
      imgAvatar: {
        width: 120,
        height: 120,
        borderRadius: 99,
      },
      userDetail: {
        flex: 3,
      },
      fullName: {
        flex: 1,
      },
      textFullName: {
        fontWeight: "bold",
        fontSize: 22,
        color: "black",
      },
      jobTitle: {
        flex: 1,
      },
      textJobTitle: {
        fontWeight: "900",
        fontSize: 21,
        color: "gray",
      },
      button: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      follow: {
        width: 110,
        height: 40,
        borderRadius: 25,
        backgroundColor: FOLLOW_COLOR,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
      },
      send: {
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: SEND_MESSAGE_COLOR,
        width: 70,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
      },
});

export default Info;
