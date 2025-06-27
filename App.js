import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import CardMainService from "./src/Components/CardsMainService/CardMainService";
import CardProcess from "./src/Components/CardsProcess/CardProcess";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
  barStyle="dark-content"
  backgroundColor="#ffffff"
/>
      <ScrollView>
        <View style={{ padding: 50 }}>
          <CardMainService />
          {/* <CardProcess /> */}
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

