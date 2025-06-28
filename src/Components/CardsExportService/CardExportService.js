import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ExportServiceCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Export Service</Text>
       {/* card1  */} 
      <View style={styles.card}>
        <Image
          source={require('../../Assets/images/premium.jpg')}
          style={styles.image}
        />

        <View style={styles.infoSection}>
          <Text style={styles.subtitle}>Premium Services</Text>

          <View style={styles.ratingRow}>
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <View style={styles.text}>
                <Text style={styles.ratingText}>13</Text>
                <Text style={styles.reviewText}>Reviews</Text>
            </View>
          </View>
        </View>
      </View>
      {/* card2  */}
      <View style={styles.card}>
        <Image
          source={require('../../Assets/images/premium.jpg')}
          style={styles.image}
        />

        <View style={styles.infoSection}>
          <Text style={styles.subtitle}>Professional Services</Text>

          <View style={styles.ratingRow}>
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <View style={styles.text}>
                <Text style={styles.ratingText}>123</Text>
                <Text style={styles.reviewText}>Reviews</Text>
            </View>
          </View>
        </View>
      </View>
      {/* card3  */}
      <View style={styles.card}>
        <Image
          source={require('../../Assets/images/premium.jpg')}
          style={styles.image}
        />

        <View style={styles.infoSection}>
          <Text style={styles.subtitle}>Standard Services</Text>

          <View style={styles.ratingRow}>
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <Entypo name="star" size={20} color="#FFD700" style={styles.starIcon} />
            <View style={styles.text}>
                <Text style={styles.ratingText}>1233</Text>
                <Text style={styles.reviewText}>Reviews</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExportServiceCard;
const styles = StyleSheet.create({
  container: {
    // padding: 16,
    flex: 1,
    gap: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  infoSection: {
    padding: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
    textAlign: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    marginLeft: 195,
  },
  starIcon: {
    marginRight: 6,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    // color: '#777',
    fontWeight: 'bold',
  },
});
