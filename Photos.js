import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";


const imgData = [
    { id: 1, imgSource: require("./assets/1.jpg") },
    { id: 2, imgSource: require("./assets/2.jpg") },
    { id: 3, imgSource: require("./assets/3.jpg") },
    { id: 4, imgSource: require("./assets/4.jpg") },
    { id: 5, imgSource: require("./assets/5.jpg") },
    { id: 6, imgSource: require("./assets/6.jpg") },
  ];
  
  const centerImgData = Math.floor(imgData.length / 2);

class Photos extends React.Component {
  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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

export default Photos;
