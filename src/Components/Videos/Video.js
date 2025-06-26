import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

function Video() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Our Videos</Text>
        <View>
            <Video />
        </View>
    </View>
  )
}

export default Video
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});