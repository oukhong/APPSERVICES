import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const CardMainService = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Main Services</Text>

      <View style={styles.layout}>
        <View style={styles.column}>
          <Text style={styles.subtitle}>Electrical Services</Text>
          <Image
            source={require("../../Assets/images/electrical.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>See More Electrical Services...</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.subtitle}>Plumbing Services</Text>
          <Image
            source={require("../../Assets/images/plumbing.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>See More Electrical Services...</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.subtitle}>Electronic Services</Text>
          <Image
            source={require("../../Assets/images/electronic.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>See More Electrical Services...</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.subtitle}>Masonry Services</Text>
          <Image
            source={require("../../Assets/images/masonry.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>See More Electrical Services...</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.subtitle}>Roofing Services</Text>
          <Image
            source={require("../../Assets/images/roofing.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>See More Electrical Services...</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.subtitle}>Desor Services</Text>
          <Image
            source={require("../../Assets/images/decor.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>See More Electrical Services...</Text>
        </View>
      </View>
    </View>
  );
};

export default CardMainService;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },

  layout: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", // make responsive wrap
    justifyContent: "space-between",
  },

  column: {
    width: "48%", // 2 columns with spacing
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  subtitle: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 100,
  },
});
