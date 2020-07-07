import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";

const imgData = [
  { id: 1, imgSource: require("./assets/1.jpg") },
  { id: 2, imgSource: require("./assets/1.jpg") },
  { id: 3, imgSource: require("./assets/1.jpg") },
  { id: 4, imgSource: require("./assets/1.jpg") },
  { id: 5, imgSource: require("./assets/1.jpg") },
  { id: 6, imgSource: require("./assets/1.jpg") },
];

const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.back}>
          <Ionicons name="md-arrow-back" size={35} color="black" />
        </View>
        <View style={styles.dot}>
          <Entypo name="grid" size={35} color="black" />
        </View>
      </View>

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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <View style={styles.photo}>
          <View style={styles.detal}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>210</Text>
          </View>
          <View style={styles.detal}>
            <Text style={{ fontSize: 20 }}>Photos</Text>
          </View>
        </View>
        <View style={styles.follower}>
          <View style={styles.detal}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>15k</Text>
          </View>
          <View style={styles.detal}>
            <Text style={{ fontSize: 20 }}>Followers</Text>
          </View>
        </View>
        <View style={styles.following}>
          <View style={styles.detal}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>605</Text>
          </View>
          <View style={styles.detal}>
            <Text style={{ fontSize: 20 }}>Following</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 7, flexDirection: "row", justifyContent: "center" }}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            {imgData.slice(0, centerImgData).map((img, index) => (
              <Image key={index} source={img.imgSource} style={styles.image} />
            ))}
          </View>
          <View>
            {imgData.slice(centerImgData).map((img, index) => (
              <Image key={index} source={img.imgSource} style={styles.image} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 0.75, flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, marginLeft: 80 }}>
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={35}
            color="black"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Ionicons name="md-add-circle-outline" size={35} color="blue" />
        </View>
        <View style={{ flex: 1 }}>
          <Feather name="user" size={35} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
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
    fontSize: 25,
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
    width: 120,
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
    width: 80,
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
  photo: {
    flex: 1,
  },
  detal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  follower: {
    flex: 1,
  },
  following: {
    flex: 1,
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "gray",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
  },
});
