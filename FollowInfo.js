import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

class FollowInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
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
});


export default FollowInfo;