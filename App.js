import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import Card from "./src/Components/Cards/card";
import Video from "./src/Components/Videos/Video";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
  barStyle="dark-content"
  backgroundColor="#ffffff"
/>
      <ScrollView>
        <View style={{ padding: 50 }}>
          <Card />
          <Video />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

