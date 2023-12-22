import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function Map({ position }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: position && position.latitude,
          longitude: position && position.longitude,
          latitudeDelta:
            position && position.latitudeDelta
              ? position.latitudeDelta
              : 0.0922,
          longitudeDelta:
            position && position.longitudeDelta
              ? position.longitudeDelta
              : 0.0421,
        }}
      >
        {position && (
          <Marker
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 200,
    borderRadius: 20,
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
});
