import React from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Header from './Header';
import Info from './Info';
import FollowInfo from './FollowInfo';
import Photos from './Photos';
import Navigation from "./Navigation";



export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Info/>
      <FollowInfo/>
      <Photos/>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 5,
  },
});
