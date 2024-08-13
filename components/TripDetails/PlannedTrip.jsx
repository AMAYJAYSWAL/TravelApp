import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function PlannedTrip({ details }) {
  const days = Object.keys(details || {});

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.title}>🧳 Plan Details</Text>

      {days.map((day) => {
        const items = details[day];
        return (
          <View key={day} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
            {items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.details}>{item.details}</Text>
                {item.image_url && (
                  <Image
                    source={{ uri: item.image_url }}
                    style={styles.image}
                  />
                )}
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.ticketPricing}>{item.ticket_pricing}</Text>
                <Text style={styles.geoCoordinates}>Coordinates: {item.geo_coordinates}</Text>
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'Bold',
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayTitle: {
    fontSize: 20,
    fontFamily: 'Bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 15,
  },
  location: {
    fontSize: 18,
    fontFamily: 'Regular',
  },
  details: {
    fontSize: 16,
    fontFamily: 'Regular',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontFamily: 'Regular',
  },
  ticketPricing: {
    fontSize: 16,
    fontFamily: 'Regular',
  },
  geoCoordinates: {
    fontSize: 16,
    fontFamily: 'Regular',
    color: 'gray',
  },
});
