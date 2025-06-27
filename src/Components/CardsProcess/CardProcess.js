import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";

const ServiceProcess = () => {
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.title}>Our Service Processes</Text>
            <View style={styles.layout}>
                {steps.map((step, index) => (
                    <View style={styles.container} key={index}>
                        <Image
                            source={require("../../Assets/images/order.jpg")}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <View style={styles.column}>
                            <Text style={styles.subtitle}>{step.title}</Text>
                            <Text>{step.description}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const steps = [
    { title: "1. Order", description: "Customer makes order." },
    { title: "2. Accept the order", description: "Service provider accepts the customer order." },
    { title: "3. Make appointment", description: "Service provider makes appointment with customer online." },
    { title: "4. Start service", description: "The service provider starts delivering service to customer." },
    { title: "5. Confirm Completion", description: "Customer confirms service is complete." },
];

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    scroll: {
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },
    layout: {
        flexDirection: "column", // Vertical stacking
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flexDirection: "row",
        width: "100%",
        maxWidth: 600,
        marginVertical: 10,
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    image: {
        width: width * 0.2,
        height: width * 0.2,
        marginRight: 15,
    },
    column: {
        flex: 1,
        flexDirection: "column",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
});

export default ServiceProcess;
