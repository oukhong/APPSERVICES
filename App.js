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
import CardExportService from "./src/Components/CardsExportService/CardExportService";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
  barStyle="dark-content"
  backgroundColor="#ffffff"
/>
      <ScrollView>
        <View style={{ padding: 50 }}>
          {/* <CardMainService /> */}
          {/* <CardProcess /> */}
          <CardExportService />
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

